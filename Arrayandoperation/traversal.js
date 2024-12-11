const arr=[1,4,2,5,3,7];
let n=arr.length;

function traverse1(){
for(let i=0;i<n;i++){
    console.log(arr[i]);
}
}
//traverse1(); using for loop 

function traverse2(){
    for(let value of arr){
        console.log(value);        
    }
}
//traverse2(); using for ..of loop

function traverse3(){
    arr.forEach((value,index)=>{
        console.log(`Value:${value}, Index:${index}`);
    });
}
//traverse3();  using forEach loop

function traverse4(){
    arr.map((value)=>{
        console.log(value); 
    });
}
//traverse4(); using map function.

function traverse5(){
    let i=0;
    while(i<arr.length){
        console.log(arr[i]);
        i++;
    }
}
//traverse5();  using while loop 

function traverse6(){
    console.log(...arr);    
}
//traverse6();  using spread method

function traverse7(){
    for(let value in arr){
        console.log(arr[value]);
    }
}
//traverse7(); using for in loop

function traverse8(){
    let i=0;
    do{
        console.log(arr[i]);
        i++;        
    }
    while(i<arr.length);

}
//traverse8(); using do ..while loop

function traverse9(){
    arr.reduce((_,value)=>{
        console.log(value);
        return value;
    })

}
//traverse9();  using reduce method

function traverse10(){
    arr.filter((value)=>{
        console.log(value);        
    })
}
//traverse10();  using filter method

function traverse11(){
    arr.every((value)=>{
        console.log(value);  
        return value;
    });
}
//traverse11(); using every method

function traverse12(){
    arr.some((value)=>{
        console.log(value);       
    })
}
//traverse12(); using some method