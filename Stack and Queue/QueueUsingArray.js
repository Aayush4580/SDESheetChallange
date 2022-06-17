class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    return !this.queue.length ? "Underflow Situation" : this.queue.shift();
  }

  isEmpty() {
    return this.elements.length == 0;
  }

  front() {
    if (this.elements.length > 0) {
      return this.elements[0];
    } else {
      return "The Queue is empty!";
    }
  }
}

var queue = new Queue();
queue.enqueue(12);
queue.enqueue(13);
console.log(queue.dequeue());
