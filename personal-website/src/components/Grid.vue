<script setup lang="ts">
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { WebGL } from 'three/examples/jsm/Addons.js';
    import {dfs, bfs, astar} from '@/assets/algorithms.ts';
    import SelectButton from 'primevue/selectbutton';
    import Button from 'primevue/button';
</script>

<script lang="ts">
    type DATA = {
        TOGGLED_TYPE: 'wall' | 'start' | 'end',
        START: [number, number],
        END: [number, number],
        GRAPH: number[][],
        ALGO: string,
        CALCULATE: boolean,
    }

    export default {
        data(): DATA {
            return {
                TOGGLED_TYPE: 'wall',
                GRAPH: [[]],
                START: [5, 0],
                END: [5, 10],
                ALGO: 'bfs',
                CALCULATE: false,
            }
        },
        mounted () {
            const TILE_COLORS = {
                'start': 0x008000,
                'end': 0xcd1c18,
                'default': 0x333333,
                'wall': 0xbbb791,
                'traversed': 0xed80e9,
                'path': 0xefbf04,
                'hover': 0x123456,
            }

            const grid = document.getElementById('grid')!
            const gridDims = grid.getBoundingClientRect()
            const windowHeight = gridDims.height
            const windowWidth = gridDims.width

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, windowWidth/windowHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            const controls = new OrbitControls(camera, renderer.domElement)
            renderer.setSize(windowWidth, windowHeight)
            grid.appendChild(renderer.domElement)
            scene.background = new THREE.Color(0x181818)

            const onWindowResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            window.addEventListener('resize', onWindowResize, false);



            if (window.innerWidth < 1024) {
                const loader = new GLTFLoader()
                loader.load('./test_model.glb', (data) => {
                    scene.add(data.scene)
                })
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                const material = new THREE.MeshBasicMaterial( {color: TILE_COLORS['default']} )
                const cube = new THREE.Mesh( geometry, material )
                scene.add(cube)

                camera.position.set(0, 0, 5);
                controls.update();

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
                const spotLight = new THREE.PointLight(0xfffff, 0.5)
                spotLight.position.set(50, 50, 50);
                spotLight.castShadow = true
                scene.add(spotLight)
                scene.add(ambientLight)

                const animate = () => {
                    requestAnimationFrame(animate)

                    cube.rotateX(0.01)
                    cube.rotateY(0.01)
                    renderer.render(scene, camera)
                    
                }

                requestAnimationFrame(animate)

                return
            }




            const ROWS = 11;
            const COLS = 11;
            const ALGORITHMS = {
                'astar': astar,
                'dfs': dfs,
                'bfs': bfs
            }
            this.TOGGLED_TYPE = 'wall'
            this.GRAPH = [];
            for (let row = 0; row < ROWS; row++) {
                const graph_row: number[] = []
                for (let col = 0; col < COLS; col++) {
                    graph_row.push(0)
                }
                this.GRAPH.push(graph_row)
            }
            

            
            if (!WebGL.isWebGL2Available()) {
                console.error(WebGL.getWebGL2ErrorMessage().textContent)
                return
            }

            const raycaster = new THREE.Raycaster();
            raycaster.layers.set(1)
            const pointer = new THREE.Vector2();
            const tileArray: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>[][] = []
            const xOffset = 2
            const zOffset = 2
            for (let i = 0; i < ROWS; i++) {
                    const rowTitleArray: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>[] = []
                for (let j = 0; j < COLS; j++) {
                    const geometry = new THREE.BoxGeometry(2, 1, 2);
                    const material = new THREE.MeshBasicMaterial( {color: TILE_COLORS['default']} )
                    const edges = new THREE.EdgesGeometry( geometry ); 
                    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } ) ); 
                    const tile = new THREE.Mesh( geometry, material )
                    tile.layers.enable(1)
                    tile.userData = {position: [i, j], type: 'default'}
                    tile.position.x = xOffset * (i-5)
                    tile.position.z = zOffset * (j-5)
                    line.position.x = xOffset * (i-5)
                    line.position.z = zOffset * (j-5)
                    rowTitleArray.push(tile);
                    scene.add(tile);
                    scene.add(line);
                }
                tileArray.push(rowTitleArray)
            }

            tileArray[this.START[0]][this.START[1]].userData['type'] = 'start'
            tileArray[this.END[0]][this.END[1]].userData['type'] = 'end'
            let answerLine: any = null
            
            camera.position.set(-15, 25, 10);
            controls.update();
            scene.background = new THREE.Color(0x181818)

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
            const spotLight = new THREE.PointLight(0xfffff, 0.5)
            spotLight.position.set(50, 50, 50);
            spotLight.castShadow = true
            scene.add(spotLight)
            scene.add(ambientLight)

            const clock = new THREE.Clock()
            let iter: any = null
            const animate = () => {
                requestAnimationFrame(animate)

                if (this.CALCULATE) {
                    if (!iter) {
                        for (let row = 0; row < ROWS; row++) {
                            for (let col = 0; col < COLS; col++) {
                                const tile = tileArray[row][col]
                                if (tile.userData['type'] === 'wall') {
                                    this.GRAPH[row][col] = 2
                                }

                                if (tile.userData['type'] === 'traversed' || tile.userData['type'] === 'path') {
                                    tile.userData['type'] = 'default'
                                }
                            }
                        }
                        iter = ALGORITHMS[this.ALGO](this.START, this.END, this.GRAPH)
                        if (answerLine) {
                            scene.remove(answerLine)
                        }
                    }

                    const delta = clock.getElapsedTime()
                    if (delta > 0.25) {
                        clock.stop()
                        clock.start()
                        let result = iter.next()
                        if (!result.done) {
                            if (result.value[0]) {
                                for (const position of result.value[0]) {
                                    const [row, col] = JSON.parse(position)
                                    if (!((row == this.START[0] && col == this.START[1]) || (row == this.END[0] && col == this.END[1]))) {
                                        tileArray[row][col].userData['type'] = 'traversed';
                                    }
                                }
                            } else {
                                const points: any[] = []
                                for (const position of result.value[1]) {
                                    const [row, col] = JSON.parse(position)
                                    if (!((row == this.START[0] && col == this.START[1]) || (row == this.END[0] && col == this.END[1]))) {
                                        tileArray[row][col].userData['type'] = 'path';
                                        points.push( new THREE.Vector3(xOffset * (row - 5), 1, zOffset * (col - 5)) );
                                    }
                                }
                                if (points) {
                                    const geometry = new THREE.BufferGeometry().setFromPoints(points)
                                    const material = new THREE.LineBasicMaterial({color: 0xffffff})
                                    answerLine = new THREE.Line(geometry, material)
                                    scene.add(answerLine)
                                } 
                            } 
                        } else {
                            this.CALCULATE = false;
                            iter = null
                            for (let row = 0; row < ROWS; row++) {
                                for (let col = 0; col < COLS; col++) {
                                    this.GRAPH[row][col] = 0
                                }
                            }
                        }
                    }
                }
                
                raycaster.setFromCamera(pointer, camera)

                for (let row = 0; row < ROWS; row++) {
                    for (let col = 0; col < COLS; col++) {
                        const tile = tileArray[row][col]
                        tile.material.color.set(TILE_COLORS[tile.userData['type']])
                    }
                }

                const intersections = raycaster.intersectObjects(scene.children)
                if (intersections.length > 0) {
                    intersections[0].object.material.color.set(TILE_COLORS['hover'])
                }

                controls.update();
                renderer.render(scene, camera)
            }

            const onPointerMove = (event: MouseEvent) => {
                pointer.x = (event.clientX / window.innerWidth) * 2 - 1
                pointer.y =  -(event.clientY / window.innerHeight) * 2 + 1
            }

            const onMouseDown = (event: MouseEvent) => {
                pointer.x = (event.clientX / window.innerWidth) * 2 - 1
                pointer.y =  -(event.clientY / window.innerHeight) * 2 + 1
                raycaster.setFromCamera(pointer, camera)
                const intersections = raycaster.intersectObjects(scene.children)
                if (intersections.length > 0) {
                    const object = intersections[0].object;
                    if (object.userData['type'] != this.TOGGLED_TYPE) {
                        if (this.TOGGLED_TYPE == 'start') {
                            tileArray[this.START[0]][this.START[1]].userData['type'] = 'default'
                            this.START = object.userData['position']
                        } else if (this.TOGGLED_TYPE == 'end') {
                            tileArray[this.END[0]][this.END[1]].userData['type'] = 'default'
                            this.END = object.userData['position']
                        }
                        object.userData['type'] = this.TOGGLED_TYPE
                    } else {
                        if (this.TOGGLED_TYPE == 'wall') {
                            object.userData['type'] = 'default'
                        }
                    }
                }
            }

            window.addEventListener('pointermove', onPointerMove, false);
            window.addEventListener('mousedown', onMouseDown, false);
            console.log("HERE?")
            requestAnimationFrame(animate)
        },
        methods: {
            toggleType: function (type: 'wall' | 'start' | 'end') {
                this.TOGGLED_TYPE = type
            },
            calculate: function () {
                this.CALCULATE = true
            }
        }
    }
</script>

<template>
    <body>
        <div id="controls" class="controls">
            Placing <SelectButton v-model="TOGGLED_TYPE" :options="['start', 'end', 'wall']" size="small"/>
            Algorithm <SelectButton v-model="ALGO" :options="['bfs', 'dfs', 'astar']" size="small"/>
            <Button class="calculate" @click="calculate()" label="Calculate" :disabled="CALCULATE" size="small"/>
        </div>
        <div id="grid" class="grid"></div>
    </body>
</template>

<style scoped>
.grid {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
}

.controls {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.calculate {
    margin: 0.25rem;
}

@media (max-width: 1024px) {
    .controls {
        display: none;
    }
}

</style>