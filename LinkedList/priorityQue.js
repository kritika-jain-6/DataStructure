
// Priorty queue
class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue operation (add an element to the queue)
    enqueue(value, priority) {
      const newNode = { value, priority };
  
      // Insert the new node in the appropriate position based on priority
      if (this.queue.length === 0) {
        this.queue.push(newNode); // If the queue is empty, just add the node
      } else {
        let inserted = false;
  
        // Traverse the queue and find the position to insert
        for (let i = 0; i < this.queue.length; i++) {
          if (this.queue[i].priority < newNode.priority) {
            // Insert the new node before the current node with lower priority
            this.queue.splice(i, 0, newNode);
            inserted = true;
            break;
          }
        }
  
        // If the node was not inserted, push it at the end (lower priority)
        if (!inserted) {
          this.queue.push(newNode);
        }
      }
    }
  
    // Dequeue operation (remove and return the element with highest priority)
    dequeue() {
      if (this.isEmpty()) {
        return null; // Return null if the queue is empty
      }
      return this.queue.shift(); // Remove the first element (highest priority)
    }
  
    // Peek operation (view the element with highest priority without removing it)
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue[0]; // The first element is the highest priority
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.queue.length;
    }
  }
  
  // Example usage:
  const pq = new PriorityQueue();
  
  pq.enqueue("Task 1", 1);  // Lower priority
  pq.enqueue("Task 2", 3);  // Higher priority
  pq.enqueue("Task 3", 2);  // Medium priority
  
  console.log(pq.dequeue()); // { value: 'Task 2', priority: 3 }
  console.log(pq.dequeue()); // { value: 'Task 3', priority: 2 }
  console.log(pq.dequeue()); // { value: 'Task 1', priority: 1 }
  
  console.log(pq.isEmpty()); // true
  