function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(item => console.log(item));
    }
  }
}

let stack = newStack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.printStack();
stack.pop();
stack.printStack();