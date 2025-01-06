<script setup>
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { WebGL } from 'three/examples/jsm/Addons.js';
</script>

<script>
    export default {
        mounted () {
            if (window.innerWidth < 1024) {
                return
            }
            
            if (!WebGL.isWebGL2Available()) {
                console.error(WebGL.getWebGL2ErrorMessage().textContent)
                return
            }

            const grid = document.getElementById('grid')
            const gridDims = grid.getBoundingClientRect()
            const windowHeight = gridDims.height
            const windowWidth = gridDims.width

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, windowWidth/windowHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            
            renderer.setSize(windowWidth, windowHeight)
            renderer.setAnimationLoop(animate)
            grid.appendChild(renderer.domElement)

            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial( {color: 0x333333} )
            const cube = new THREE.Mesh( geometry, material )
            const controls = new OrbitControls(camera, renderer.domElement)
            const loader = new GLTFLoader()
            camera.position.set(0, 0, 5);
            controls.update();
            scene.add(cube)
            scene.background = new THREE.Color(0x181818)

            function animate() {
                // requestAnimationFrame(animate)

                controls.update();

                cube.rotation.x += 0.01
                cube.rotation.y += 0.01
                renderer.render(scene, camera)
            }
        }
    }
</script>

<template>
    <body>
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
</style>