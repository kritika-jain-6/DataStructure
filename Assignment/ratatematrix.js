function rotate90(mat){
    const n=mat.length;
    const res=Array.from({length:n},()=>Array(n).fill(0));
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            res[j][n-i-1]=mat[i][j];
        }
    }
    for(let i=0;i<n;i++){
        mat[i]=res[i].slice();
    }
}

const mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

rotate90(mat);
mat.forEach(row=>{
    console.log(row.join(" ")); 
});