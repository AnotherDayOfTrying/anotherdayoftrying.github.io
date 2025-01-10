import { PriorityQueue, Deque } from "datastructures-js";

export type position = [number, number]
export type graph = number[][] // 0 = empty, 1 = visited, 2 = wall

class GraphNode {
    pos: position;
    parent: GraphNode | null;

    constructor(position: position, parent: GraphNode | null) {
        this.pos = position;
        this.parent = parent

    }
}


function *dfs(start: position, end: position, graph: graph) {
    const ROWS = graph.length
    const COLS = graph[0].length
    const visited: Set<string> = new Set([JSON.stringify(start)]);
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    function *helper(current_pos: position) {
        yield [current_pos, null]
        if (JSON.stringify(current_pos) == JSON.stringify(end)) {
            yield [null, [JSON.stringify(current_pos)]]
            return
        }

        for (const direction of directions) {
            const new_x = current_pos[0] + direction[0];
            const new_y = current_pos[1] + direction[1];
            if (0 <= new_x && new_x < COLS && 0 <= new_y && new_y < ROWS) {
                if (visited.has(JSON.stringify([new_y, new_x])) || graph[new_y][new_x] === 2) {
                    continue;
                }
                const new_position: position = [new_y, new_x]
                visited.add(JSON.stringify(new_position));
                for (let viewed of helper(new_position)) {
                    if (viewed[1]) {
                        viewed[1].push(JSON.stringify(current_pos))
                        yield [null, viewed[1]]
                        return
                    }
                    yield viewed
                }
            }
        }
    }
    for (let viewed of helper(start)) {
        if (viewed[1]) {
            yield [null, viewed[1]]
            return
        }
        yield [[JSON.stringify(viewed[0])], viewed[1]]
    }
    
}

// We want to yield what we have visited, and return the path the the end if one exists
function *bfs(start: position, end: position, graph: graph) {
    const ROWS = graph.length
    const COLS = graph[0].length
    const queue = new Deque([start]);
    const visited: Set<string> = new Set([JSON.stringify(start)]);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const startNode = new GraphNode(start, null)
    const nodes: {[key: string]: GraphNode} = {
        [JSON.stringify(start)]: startNode
    }
    while (queue.size()) {
        const length = queue.size();

        const newlyVisited = new Set();
        for (let i = 0; i < length; i++) {
            const current_pos = queue.popFront()!; //Note: this operation is O(n)

            // return path if end is found
            if (JSON.stringify(current_pos) === JSON.stringify(end)) {
                const returnPath: string[] = []
                let node: GraphNode | null = nodes[JSON.stringify(current_pos)]
                while (node) {
                    returnPath.push(JSON.stringify(node.pos))
                    node = node.parent
                }
                yield [null, returnPath]
                return
            }
            

            for (const direction of directions) {
                const new_x = current_pos[0] + direction[0];
                const new_y = current_pos[1] + direction[1];
                if (0 <= new_x && new_x < ROWS && 0 <= new_y && new_y < COLS) {
                    if (visited.has(JSON.stringify([new_x, new_y])) || graph[new_x][new_y] === 2) {
                        continue;
                    }
                    const new_position: position = [new_x, new_y]
                    const hashString = JSON.stringify(new_position)
                    visited.add(hashString);
                    newlyVisited.add(hashString);
                    const new_node = new GraphNode(new_position, nodes[JSON.stringify(current_pos)])
                    nodes[hashString] = new_node
                    queue.pushBack(new_position)
                }
            }
        }
        yield [newlyVisited, null]
    }
    yield [null, []]
    return //no answer exists
}


function *astar(start: position, end: position, graph: graph) {

    function manhatten_distance(pos1: position, pos2 : position) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1])
    }


    const ROWS = graph.length
    const COLS = graph[0].length
    const queue = new PriorityQueue<[number, position]>((pos1, pos2) => pos1[0] - pos2[0], [[manhatten_distance(start, end), start]]);
    const visited: Set<string> = new Set([JSON.stringify(start)]);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const startNode = new GraphNode(start, null)
    const nodes: {[key: string]: GraphNode} = {
        [JSON.stringify(start)]: startNode
    }
    while (queue.size()) {
        const newlyVisited = new Set();

            const [_, current_pos] = queue.dequeue()!; //Note: this operation is O(n)

            // return path if end is found
            if (JSON.stringify(current_pos) === JSON.stringify(end)) {
                const returnPath: string[] = []
                let node: GraphNode | null = nodes[JSON.stringify(current_pos)]
                while (node) {
                    returnPath.push(JSON.stringify(node.pos))
                    node = node.parent
                }
                yield [null, returnPath]
                return
            }
            

            for (const direction of directions) {
                const new_x = current_pos[0] + direction[0];
                const new_y = current_pos[1] + direction[1];
                if (0 <= new_x && new_x < ROWS && 0 <= new_y && new_y < COLS) {
                    if (visited.has(JSON.stringify([new_x, new_y])) || graph[new_x][new_y] === 2) {
                        continue;
                    }
                    const new_position: position = [new_x, new_y]
                    visited.add(JSON.stringify(new_position));
                    newlyVisited.add(JSON.stringify(new_position));
                    const new_node = new GraphNode(new_position, nodes[JSON.stringify(current_pos)])
                    nodes[JSON.stringify(new_position)] = new_node
                    queue.enqueue([manhatten_distance(new_position, end), new_position])
                }
            }
        
        yield [newlyVisited, null]
    }
    yield [null, []]
    return //no answer exists
}


function tester() {
    const test_graph: graph = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]
    const iterator = astar([0, 0], [9, 9], test_graph)
    for (let visited of iterator) {
        console.log("ITER")
        console.log(visited[0])
        if (!visited[0]) {
            console.log("FINISHED WITH PATH")
            console.log(visited[1])
        }
    }    
}




export {
    dfs,
    bfs,
    astar,
    tester
}