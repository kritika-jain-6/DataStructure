class PriorityQue{
    constructor(){
        this.que=[];
    }
    enque(val, prio) {
        this.que.push({ val, prio });
        this.que.sort((a, b) => a.prio - b.prio);
    }

    deque(){
        if(this.isEmpty()){
            return null;

        }
        return this.que.shift().val;
    }

    isEmpty(){
        return this.que.length===0;
    }
    
}

class Graph{
    constructor(V){
        this.V=V;
        this.adj=new Array(V);
        for(let i=0;i<V;i++){
            this.adj[i]=[];
        }
    }
     
    addEdge(u,v,w){
        this.adj[u].push({v,w});
        this.adj[v].push({v:u,w});
    }
    shortestPath(src){
        const pq=new PriorityQue();
        const dist=new Array(this.V).fill(Infinity);
        const visited=new Array(this.V).fill(false);
        pq.enque(src,0);
        dist[src]=0;
        while(!pq.isEmpty()){
            const u=pq.deque();
            if(visited[u])continue;
            visited[u]=true;
            for(const {v,w}of this.adj[u]){
                if(!visited[v] && dist[u]+w<dist[v]){
                    dist[v]=dist[u]+w;
                    pq.enque(v,dist[v]);
                }
            }
        
        }
        console.log("Shortest Path from source to all vertices");
        for(let i=0;i<this.V;i++){
            console.log(`${i}\t\t${dist[i]===Infinity?"Infinity":dist[i]}`);
        }   
    }
}

function main(){
    const g = new Graph(7); 
    g.addEdge(1, 2, 4);
    g.addEdge(1, 3, 2);
    g.addEdge(2, 4, 7);
    g.addEdge(2, 5, 1);
    g.addEdge(3, 6, 5);
    g.addEdge(5, 6, 3);

    const source = 1;
    g.shortestPath(source);
}
main();