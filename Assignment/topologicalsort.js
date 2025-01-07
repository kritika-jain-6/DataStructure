class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
    }

    topologicalSortDFSUtil(v, visited, stack) {
        visited[v] = true;

        let neighbors = this.adjList.get(v);
        for (let i in neighbors) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                this.topologicalSortDFSUtil(neighbor, visited, stack);
            }
        }

        stack.push(v);
    }

    topologicalSortDFS() {
        let stack = [];
        let visited = {};
        for (let i of this.adjList.keys()) {
            visited[i] = false;
        }

        for (let i of this.adjList.keys()) {
            if (!visited[i]) {
                this.topologicalSortDFSUtil(i, visited, stack);
            }
        }

        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }

    topologicalSortKahn() {
        let inDegree = new Array(this.vertices).fill(0);
        for (let [key, value] of this.adjList) {
            for (let i of value) {
                inDegree[i]++;
            }
        }

        let queue = [];
        for (let i = 0; i < this.vertices; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let count = 0;
        let topOrder = [];

        while (queue.length > 0) {
            let u = queue.shift();
            topOrder.push(u);

            for (let i of this.adjList.get(u)) {
                if (--inDegree[i] === 0) {
                    queue.push(i);
                }
            }

            count++;
        }

        if (count !== this.vertices) {
            console.log("There exists a cycle in the graph");
            return;
        }

        for (let i of topOrder) {
            console.log(i);
        }
    }
}

// Example usage:
let g = new Graph(6);
g.addVertex(5);
g.addVertex(4);
g.addVertex(3);
g.addVertex(2);
g.addVertex(1);
g.addVertex(0);

g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

console.log("Topological Sort using DFS:");
g.topologicalSortDFS();

console.log("Topological Sort using Kahn's Algorithm:");
g.topologicalSortKahn();