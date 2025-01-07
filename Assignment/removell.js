class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function printList(curr){
    while(curr!=null){
        console.log(curr.data+" ");
        curr=curr.next;        
    }
}

function removell(head){
    let st=new Set();
    let prev=null;
    while(head!=null){
        if(st.has(head.data)){
            prev.next=head.next;
        }
        else{
            st.add(head.data);
            prev=head;
        }
        head=head.next;
        
    }
}

let head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(3);
//head.next.next.next.next.next.next= head.next.next;

removell(head);
printList(head);
