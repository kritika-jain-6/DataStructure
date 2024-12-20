function reverseStack(stack) {
    if (stack.length === 0) {
        return;
    }

    // Remove the top element
    let top = stack.pop();

    // Reverse the remaining stack
    reverseStack(stack);

    // Insert the top element at the bottom of the stack
    insertAtBottom(stack, top);
}

function insertAtBottom(stack, element) {
    // If stack is empty, push the element at the bottom
    if (stack.length === 0) {
        stack.push(element);
        return;
    }

    // Remove all elements from the stack
    let top = stack.pop();

    // Recur to insert the element at the bottom
    insertAtBottom(stack, element);

    // Push the removed element back to the stack
    stack.push(top);
}

// Example usage:
let stack = [1, 2, 3, 4];
reverseStack(stack);
console.log(stack);  // Output: [4, 3, 2, 1]
