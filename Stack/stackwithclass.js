class Stack{
    constructor(){
        this.arr=[];
    }
    push(element){
        this.arr.push(element);
    }
    
    pop(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    printStack(){
        return this.arr.join();
    }
}
let stack=new Stack();
console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());







