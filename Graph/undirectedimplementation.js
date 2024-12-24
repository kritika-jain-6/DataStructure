// Undirected graph using Adjacent Matrix
/*function addEdge(mat,i,j){
    mat[i][j]=1;
    mat[j][i]=1
}

function displayMatrix(mat){
    for(const row of mat){
        // console.log(row.join(" "));        
    }
}

const V=4;
let mat =Array.from({length:V},()=>Array(V).fill(0));
addEdge(mat,0,1);
addEdge(mat,0,2);
addEdge(mat,1,2);
addEdge(mat,2,3);

// console.log("Adjaceny MAtrix:");
displayMatrix(mat);*/

//Undirected Graph using Adjacent List

function addEdge(mat,i,j){
    mat[i].push(j);
    mat[j].push(i);
}

function displayAdjaList(mat){
    for(let i=0 ;i < mat.length; i++){
        console.log(`${i} `);
        for(const j of mat[i]){
            console.log(`${j}`);        
        }
        console.log();
    }
    
}

const V=4;
let mat=Array.from({length:V},()=>[]);
addEdge(mat,0,1);
addEdge(mat,0,2);
addEdge(mat,1,2);
addEdge(mat,2,3);

console.log("Adjacent List");
displayAdjaList(mat);



