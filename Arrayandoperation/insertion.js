const arr=[1,3,5,7,9];
let n=arr.length;

function insertion1(){
    arr.push(10);
    console.log(arr);
    
}
//insertion1(); using push method

function insertion2(){
    console.log([11,...arr, 10]); 
}
//insertion2(); using spread operator

 function insertion3(){
    arr.unshift(23);
    console.log(arr);
 }
 //insertion3(); using unshift method

 function insertion4(){
    arr.splice(2,0,23,67)
    console.log(arr);
    
 }
 //insertion4(); using splice method

 function insertion5(){
    let newarr=[12].concat(arr);
    //console.log(newarr);
    let arr1=[2,4,6,8].concat(...arr);
    console.log(arr1);
    
 }
//insertion5();  using concat method

