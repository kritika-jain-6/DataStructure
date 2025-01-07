class Node{
    constructor(k){
        this.left=null;
        this.right=null;
        this.data=k;
    }
}
function lca(root,n1,n2){
    if(root === null)return null;
    if(root.data ===n1 || root.data === n2)
        return root;
    let llca=lca(root.left,n1,n2);
    let rlca=lca(root.right,n1,n2);

    if(llca && rlca)return root;

    return llca?llca:rlca;
}

let root = new Node(9);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.left = new Node(0);
root.right.right = new Node(8);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

console.log(lca(root, 4,8).data); // Output should be 3