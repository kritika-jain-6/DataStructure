class Node{
    constructor(key){
        this.head=null;
        this.next=null;
    }
}
function newNode(key){
    let temp=new Node(key);
    return temp;
}

function printList(node){
    while(node!=null){
        console.log(node.head);
        node=node.next;        
    }
}

function merge(h1,h2){
    if(h1==null)return h2;
    if(h2==null)return h1;
    if(h1.head<h2.head){
        h1.next=merge(h1.next,h2);
        return h1;
    }
    else{
        h2.next-merge(h1,h2.next);
        return h2;

    }
}



let head1 =newNode(1);
head1.next=newNode(2);
head1.next.next=newNode(3);

let head2 =newNode(5);
head2.next=newNode(6);
head2.next.next=newNode(7);

// let head3 =newNode(1);
// head3.next=newNode(2);
// head3.next.next=newNode(3);

mergehead=merge(head1,head2);

printList(mergehead);
