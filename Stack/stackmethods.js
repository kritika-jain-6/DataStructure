const stack=[1,3,5,7,9,2,4,6];


function size(){
    return stack.length;
}
//console.log(size());

function push(){
    stack.push(15);
    return stack;
}
//console.log(push());

function pop(){
    stack.pop();
    return stack;
}
//console.log(pop());

function peek(){
    //stack.peek();
    return stack[stack.length-1];
}
//console.log(peek());

function isEmpty(){
    if(stack.length===0){
        return true
    }
    else{
        return false;
    }
}
//console.log(isEmpty());

function printStack(){
    return stack.join();
}
//console.log(printStack());
