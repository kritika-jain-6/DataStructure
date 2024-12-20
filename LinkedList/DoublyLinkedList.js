class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class Doublyll{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    isEmpty(){
        if(this.head==null) return true;
        return false;
    }

    insertFirst(data){
        let temp=new Node(data);
        temp.next=this.head;
        if(this.head!==null){
            this.head.prev=temp;
        }
        this.head=temp;
    }

    insertLast(data){
        let temp=new Node(data);
        if(!this.head){
            this.head=temp;
            return;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        temp.prev=curr;
        curr.next=temp;
    }

    size(){
        let cnt=0;
        let curr=this.head;
        while(curr){
            cnt++;
            curr=curr.next;
        }
        return cnt;    
    }

    insertAt(idx,data){
        if(idx < 0 || idx > this.size()){
            console.log("invalid "); 
            return ;           
        }
        let temp=new Node(data);
        if(idx===0){
            temp.next=this.head;
            if(this.head!==null){
                this.head.prev=temp;
            }
            this.head=temp;
            if(this.tail === null){
                this.tail=temp;
            }
        }
        let curr=this.head;
        for(let i=0;i<idx -1 ;i++){
            curr=curr.next;
        }
        temp.prev=curr;
        temp.next=curr.next;
         
        if(curr.next){
            curr.next.prev=temp;
        }
        curr.next=temp;
    }

    display(){
        if(!this.isEmpty()){
            let curr=this.head;
            while(curr!=null){
                console.log(curr.data);
                curr=curr.next;                
            }
        }
    }

    insert(val){
        let node=new Node(val);
        if(this.tail){
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
            return node;
        }
        this.head=this.tail=node;
        return node;
    }

    removeFirst(){
        if(!this.head){
            return ;
        }
        this.head=this.head.next;
        if(this.head){
            this.head.prev=null;
        }
    }
    
    removeLast(){
        if(!this.head){
            return ;
        }
        if(!this.head.next){
            this.head=null;
            return ;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.prev.next=null;
    }

    removeAt(idx){
        if(idx < 0 || idx >= this.size()){
            console.log("invalid");
            return ;
        }
        if(idx===0){
            if(!this.head){
                return ;
            }
            this.head=this.head.next;
            if(this.head){
                this.head.prev=null;
            }
            return ;
        }
        let curr=this.head;
        for(let i=0;i<idx-1;i++){
            curr=curr.next;
        }
        if(curr.next){
            curr.next=curr.next.next;
            if(curr.next){
                curr.next.prev=curr;
            }
        }
    }
}


const dl=new Doublyll();

dl.insert(40);
dl.insert(50);
dl.insert(60);
dl.insert(70);
dl.display();
dl.insertAt(4,99);
dl.display();
dl.insertFirst(10);
dl.display();
dl.insertLast(20);
dl.display();
dl.removeFirst();
dl.display();
dl.removeLast();
dl.display();
dl.removeAt(1);
dl.display();

