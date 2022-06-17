class Stack {
  constructor() {
    this.item = [];
    this.size = this.item.length;
  }
  push(val) {
    this.item.push(val);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  clear() {
    this.item = [];
  }
}

var stack = new Stack();
stack.push(12);
stack.push(15);
stack.push(14);
console.log(stack.peek());
