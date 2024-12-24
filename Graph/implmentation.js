class Graph {
    constructor() {
        this.adjacencyList = {}; // Adjacency list to represent the graph
    }

    // Add a vertex to the graph
    addVertex(ver) {
        if (!this.adjacencyList[ver]) {
            this.adjacencyList[ver] = []; // Initialize with an empty array for the vertex
        }
    }

    // Add a directed edge from ver1 to ver2
    addEdge(ver1, ver2) {
        if (!this.adjacencyList[ver1]) {
            this.addVertex(ver1);
        }
        if (!this.adjacencyList[ver2]) {
            this.addVertex(ver2);
        }
        this.adjacencyList[ver1].push(ver2); // Add ver2 to the adjacency list of ver1
    }

    // Remove a vertex from the graph, including its edges
    removeVertex(ver) {
        if (!this.adjacencyList[ver]) return;

        // Remove all edges going out from the vertex
        while (this.adjacencyList[ver].length) {
            const adjacentVertex = this.adjacencyList[ver].pop();
            this.removeEdge(ver, adjacentVertex); // Remove directed edge from ver to adjacentVertex
        }

        // Remove the vertex from other vertices' adjacency lists
        for (let vertex in this.adjacencyList) {
            this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
                (neighbor) => neighbor !== ver
            );
        }

        // Delete the vertex from the adjacency list
        delete this.adjacencyList[ver];
    }

    // Remove the directed edge from ver1 to ver2
    removeEdge(ver1, ver2) {
        // Check if ver1 exists in the graph
        if (!this.adjacencyList[ver1]) return;

        // Remove the directed edge from ver1 to ver2
        this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(
            (neighbor) => neighbor !== ver2
        );
    }

    // Depth First Search (DFS)
    dfs(start) {
        const visit = {}; // Object to track visited nodes
        const res = []; // Result array to store the DFS traversal
        const dfsHelper = (ver) => {
            if (!ver) return;
            visit[ver] = true; // Mark the vertex as visited
            res.push(ver); // Add vertex to the result
            this.adjacencyList[ver].forEach((neighbor) => {
                if (!visit[neighbor]) {
                    dfsHelper(neighbor); // Recursively visit unvisited neighbors
                }
            });
        };
        dfsHelper(start);
        return res;
    }

    // Breadth First Search (BFS)
    bfs(start) {
        const visit = {}; // Object to track visited nodes
        const res = []; // Result array to store the BFS traversal
        const que = [start]; // Queue to manage BFS traversal
        visit[start] = true; // Mark the start vertex as visited
        while (que.length) {
            const ver = que.shift(); // Dequeue a vertex
            res.push(ver); // Add vertex to the result
            this.adjacencyList[ver].forEach((neighbor) => {
                if (!visit[neighbor]) {
                    visit[neighbor] = true; // Mark the neighbor as visited
                    que.push(neighbor); // Enqueue the neighbor
                }
            });
        }
        return res;
    }
}

// Example usage:

const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// Add directed edges
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

// Display the adjacency list
console.log("Graph adjacency list before removal:");
console.log(graph.adjacencyList);

// Remove edge from B to C
graph.removeEdge("B", "C");

// Remove vertex B
graph.removeVertex("B");

// Display the adjacency list after removal
console.log("Graph adjacency list after removal:");
console.log(graph.adjacencyList);

// Optionally, you can test DFS and BFS
console.log("DFS from A:", graph.dfs("A"));
console.log("BFS from A:", graph.bfs("A"));
