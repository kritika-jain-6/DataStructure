const arr=[3,7,6,4,9,1,8];
let n=arr.length;

function sorting1(){
    arr.sort((a,b)=>a-b); // for 1 or more digit value
    console.log(arr);
}
//sorting1(); using lamda function and sort method

function sorting2(){
    console.log(arr.sort()); // for single digit value
}
//sorting2();  using sort method

function sorting3(){
    console.log(arr.toSorted());
}
//sorting3(); using toSorted method

function sorting4(){
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
    
    
}
 //sorting4(); //using bubble sort method

 function sorting5(){
    arr.sort((a,b)=>b-a); // for 1 or more digit value
    console.log(arr);
}
//sorting5(); using lamda function and sort method in descending order