class Stack {
    constructor() {
        this.MAX = 1000;
        this.top = -1;
        this.a = new Array(this.MAX);
    }

    isEmpty() {
        return (this.top < 0);
    }

    push(x) {
        if (this.top >= (this.MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
            this.a[++this.top] = x;
            console.log(x + " pushed into stack");
            return true;
        }
    }

    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top--];
        }
    }

    peek() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top];
        }
    }

    print() {
        for (let i = this.top; i > -1; i--) {
            console.log(" " + this.a[i]);
        }
    }
}

// Driver code
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop() + " Popped from stack");
console.log("Top element is :" + stack.peek());
console.log("Elements present in stack :");
stack.print();

// class SpecialStack {
//     constructor() {
//         this.stack = [];
//         this.helper = [];
//     }
//
//     push(x) {
//         if (this.stack.length === 0) {
//             this.stack.push(x);
//             this.helper.push(x);
//         } else {
//             this.stack.push(x);
//             let min = this.helper.pop();
//             if (x < min) {
//                 this.helper.push(x);
//             } else {
//                 this.helper.push(min);
//             }
//         }
//     }
//
//     pop() {
//         let x = this.stack.pop();
//         this.helper.pop();
//         return x;
//     }
//
//     getMin() {
//         let min = this.helper.pop();
//         this.helper.push(min);
//         return min;
//     }
// }
//
// let spacialTest = new SpecialStack();
// spacialTest.push(10);
// spacialTest.push(24);
// spacialTest.push(36);
// console.log(spacialTest.getMin());
// spacialTest.push(5);
// console.log(spacialTest.getMin());
