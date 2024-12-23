class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;  // Fixed typo here: changed 'rigth' to 'right'
            else
                this.insertNode(node.right, newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null)
            return null;
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {
        if (node === null) {
            return null;
        }
        else if (data < node.data) {
            return this.search(node.left, data);
        }
        else if (data > node.data) {
            return this.search(node.right, data);
        }
        else {
            return node;
        }
    }

    height(node){
        if(node === null){
            return -1;
        }
        else{
            let lefth=this.height(node.left);
            let righth=this.height(node.right);
            return Math.max(lefth,righth)+1;
        }

    }


}

// Test the Binary Search Tree (BST)
const Bst = new BinarySearchTree();

// Insert different values into the BST
Bst.insert(40);
Bst.insert(25);
Bst.insert(60);
Bst.insert(14);
Bst.insert(55);
Bst.insert(30);
Bst.insert(75);
Bst.insert(80);
Bst.insert(95);
Bst.insert(10);

const  root = Bst.getRootNode();

console.log(Bst.height(root));
/*console.log("In-order Traversal:");
Bst.inorder(root);
Bst.remove(60);
console.log("\nIn-order after removing 60:");
Bst.inorder(Bst.getRootNode());  

Bst.remove(75);
console.log("\nIn-order after removing 75:");
Bst.inorder(Bst.getRootNode());

Bst.remove(55);
console.log("\nIn-order after removing 55:");
Bst.inorder(Bst.getRootNode());

console.log("\nIn-order:");
Bst.inorder(Bst.getRootNode());

console.log("\nPre-order:");
Bst.preorder(Bst.getRootNode());

console.log("\nPost-order:");
Bst.postorder(Bst.getRootNode());*/
