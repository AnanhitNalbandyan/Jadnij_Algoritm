class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let queue = new Queue();
console.log(queue.isEmpty());  // Output: true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue()); // Output: 1 2 3
console.log(queue.dequeue());    // Output: 1
console.log(queue.front());      // Output: 2