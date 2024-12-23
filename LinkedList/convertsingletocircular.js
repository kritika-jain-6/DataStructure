
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    convertToCircular() {
        if (!this.head) return;

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = this.head;
    }

    printCircular() {
        if (!this.head) return;

        let current = this.head;
        let output = "";
        do {
            output += `${current.data} -> `;
            current = current.next;
        } while (current !== this.head);
        output += current.data;
        console.log(output);
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.convertToCircular();

list.printCircular();

