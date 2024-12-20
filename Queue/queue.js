class Queue{
    constructor(){
        this.que=[];
    }
    enqueu(ele){
         return this.que.push(ele);
    }
    dequeu(){
        return this.que.shift();
    }
    isEmpty(){
        return this.que.length===0;
    }
    peek(){
        if(this.isEmpty()){
            return "Empty";
        }
        return this.que[0];
    }
    size(){
        return this.que.length;
    }
    clear(){
         return this.que=[];
    }
    display(){
        return this.que.join(' ');
    }

}
let queue=new Queue();
queue.enqueu(10);
queue.enqueu(20);
queue.enqueu(30);
console.log(queue.display());
console.log(queue.dequeu());
console.log(queue.display());
console.log(queue.peek());
console.log(queue.display());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.clear());
console.log(queue.display());





