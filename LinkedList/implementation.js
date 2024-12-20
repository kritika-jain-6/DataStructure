class Node{
    constructor (ele){
        this.ele=ele;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.si=0;
    }

    add(ele){
        let node=new Node(ele);
        let curr;
        if(this.head==null){
            this.head=node;
        }
        else{
            curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
        }
        this.si++;
    }

    insertEle(ele,idx){
        if(idx<0||idx>this.si){
            return console.log("Enter the valid index");      
        }
        else{
            let node=new Node(ele);
            let curr,prev;
            curr=this.head;
            if(idx==0){
                node.next=this.head;
                this.head=node;
            }
            else{
                curr=this.head;
                let it=0;
                while(it<idx){
                    it++;
                    prev=curr;
                    curr=curr.next;
                }
                node.next=curr;
                prev.next=node;
            }
            this.si++;
        }
    }

    removeFrom(idx){
        if(idx<0||idx>=this.si){
            return console.log("enter the valid index");
            
        }
        else{
            let curr,prev,it=0;
            curr=this.head;
            prev=curr;
            if(idx===0){
                this.head=curr.next;
            }
            else{
                while(it<idx){
                    it++;
                    prev=curr;
                    curr=curr.next;
                }
                prev.next=curr.next;
            }
            this.si--;
            return curr.ele;
        }
    }

    removeEle(ele){
        let curr=this.head;
        let prev=null;
        while(curr!=null){
            if(curr.ele===ele){
                if(prev==null){
                    this.head=curr.next;
                }
                else{
                    prev.next=curr.next;
                }
                this.si--;
                return curr.ele;
            }
            prev=curr;
            curr=curr.next;
        }
        return -1;
    }

    indexOF(ele){
        let cnt=0;
        let curr=this.head;
        while(curr!=null){
            if(curr.ele===ele){
                return cnt;
            }
            cnt++;
            curr=curr.next;
        }
        return -1;

    }

    isEmpty(){
        return this.si==0;
    }

    size(){
        let cnt=0;
        let curr=this.head;
        while(curr!=null){
            cnt++;
            curr=curr.next;
        }       
        return cnt;
    }

    printList(){
        let curr=this.head;
        let str="";
        while(curr){
            str+=curr.ele+" ";
            curr=curr.next;
        }
        console.log(str);      
    }

    middle(){
        let slow=this.head;
        let fast=this.head;
        while(fast !==null && fast.next!==null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow.ele;
    }

    reverse(){
        let prev=null;
        let curr=this.head;
        let next=null;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }
    addFirst(ele){
        const newNode=new Node(ele);
        newNode.next=this.head;
        this.head=newNode;
    }

    addLast(ele){
        const newNode=new Node(ele);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
    }

    addAt(idx,ele){
        if (idx<0 || idx> this.size()){
            console.error("Invalid index");
            return;
        }
        const newNode=new Node(ele);
        if (idx===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let curr=this.head;
        for (let i=0;i<idx-1;i++){
            curr=curr.next;
        }
        newNode.next=curr.next;
        curr.next=newNode;
    }

    addAtMiddle(ele)
    {
        const middleIndex=Math.floor(this.size()/2);
        this.addAt(middleIndex,ele);
    }

    sort()
    {
        if(!this.head || !this.head.next)  //when list empty or only one elem.
        {
            return;
        }

        let curr=this.head;
        let newArray=[];  //creating array and pushing elem. into it
        while(curr!=null)
        {
            newArray.push(curr.ele);
            curr=curr.next;
        }

        newArray.sort((a,b)=>a-b);

        //linked list with sorted order
        curr=this.head;
        for(let i=0;i<newArray.length;i++)
        {
            curr.ele=newArray[i];
            curr=curr.next;
        }
    }

    removeDuplicate()
    {
        let curr=this.head;

        let seen=new Set();
        let prev=null;

        while(curr!=null)
        {
            if(seen.has(curr.ele))
            {
                prev.next=curr.next;
            }
            else{
                //if not dupliacte,add to set and move to next node
                seen.add(curr.ele);
                prev=curr;
            }
            curr=curr.next;
        }
    }
}




let ll=new LinkedList();
//console.log(ll.isEmpty());
ll.add(50);
//ll.printList();
//console.log(ll.size_of_list());
ll.add(30);
ll.add(90);
ll.add(20);
ll.add(40);
ll.printList();
/*console.log(ll.removeEle(50));
ll.printList();
console.log(ll.indexOF(40));
ll.insertEle(60,2);
ll.printList();
console.log(ll.isEmpty());
console.log(ll.removeFrom(3));
ll.printList();
console.log(ll.middle());
ll.reverse();
ll.printList();
ll.sort()
ll.printList();
ll.addAtMiddle(30);
ll.addFirst(66);
ll.addLast(77);
ll.addAt(3,22);
// console.log(ll.size());
ll.addAtMiddle(30);
ll.printList();
ll.removeDuplicate();
ll.printList();*/


