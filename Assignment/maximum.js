function printMax(arr,n,k){
    let j,max;
    for(let i=0;i<=n-k;i++){
        max=arr[i];
        for(j=1;j<k;j++){
            if(arr[i+j]>max)
                max=arr[i+j];
        }
        console.log(max+" ");
    }
}

let arr=[1,3,-1,-3,5,3,6,7];
let k=3;
let n=arr.length;
printMax(arr,n,k);