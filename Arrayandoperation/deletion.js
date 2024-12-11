const arr=[1,3,5,7,9];
let n=arr.length;

 function deletion1(){
    arr.pop();
    console.log(arr);
 }
 //deletion1(); using pop method

 function deletion2(){
    arr.shift();
    console.log(arr);
 }
 //deletion2();  using shift method

 function deletion3(){
    arr.splice(3,2);
    console.log(arr);
    
 }
 //deletion3(); using splice method

 function deletion4(){
    delete arr[1];
    console.log(arr);   
 }
 //deletion4(); using delete operator

 