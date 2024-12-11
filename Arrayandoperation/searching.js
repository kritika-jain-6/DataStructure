const arr=[1,3,5,7,9,2,4,6];
let n=arr.length;

 function searching1(){
    console.log(arr.indexOf(9));
 }
// searching1(); using indexof method

function searching2(){
    console.log(arr.includes(4));
}
//searching2(); using includes method

function searching3(){
    console.log(arr.find((value=>value==7)));  
}
//searching3();  using find method

function searching4(){
    console.log(arr.lastIndexOf(4));
}
//searching4(); using lastIndexOf method

function searching5(){
    console.log(arr.findIndex(num=>num>5));
    //console.log(arr);
    
}
//searching5(); using findIndex method

function searching6(){
    console.log(arr.filter(num=>num>5));
    //console.log(arr);
}
//searching6(); using filter method

function searching7(){
    console.log(arr.some(num=>num>5));
    //console.log(arr);
}
//searching7(); using some method

function searching8(){
    console.log(arr.every(num=>num>5));
    //console.log(arr);   
}
//searching8(); using every method