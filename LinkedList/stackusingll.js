class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.top=null;
    }
    push(data){
        const newNode=new Node(data);
        newNode.next=this.top;
        this.top=newNode;
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return null;
        }
        const poppedNode=this.top;
        this.top=this.top.next;
        return poppedNode.data;
    }

    peek(){
        if(this.isEmpty()){
            console.log("stack is Empty");
            return null;  
        }
        return this.top.data;
    }

    isEmpty(){
        return this.top === null;
    }

    printStack(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return ;            
        }
        let curr=this.top;
        while(curr!==null){
            console.log(curr.data);
            curr=curr.next;            
        }
    }
}

const stack =new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.printStack();
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.printStack();
console.log(stack.isEmpty());
stack.pop();




