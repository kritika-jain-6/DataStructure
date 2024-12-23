class Node{
    constructor(data){
        this.data=data;
        this.next=null;        
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0;
    }

    enqueue(data){
        const newNode = new Node(data);
        if(this.rear === null){
            this.front=this.rear=newNode;
            this.size++;
            return ;
        }
        this.rear.next=newNode;
        this.rear=newNode;
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return null;
        }
        const deq=this.front;
        this.front=this.front.next;
        if(this.front === null){
            this.rear =null;
        }
        this.size--;
        return deq.data;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return null;            
        }
        return this.front.data;
    }

    isEmpty(){
        return this.front === null;
    }

    getSize(){
        return this.size;
    }

    printQueue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return null;            
        }
        let curr=this.front;
        while(curr!==null){
            console.log(curr.data);
            curr=curr.next;            
        }
    }
}

const queue=new Queue();

queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 

console.log("Front element:", queue.peek()); 

console.log("Dequeue element:", queue.dequeue()); 
console.log("Front element after dequeue:", queue.peek()); 

queue.printQueue(); 

console.log("Queue size:", queue.getSize()); 

console.log("Is queue empty?", queue.isEmpty()); 

queue.dequeue();
queue.dequeue();
console.log("Is queue empty after dequeueing all elements?", queue.isEmpty()); 