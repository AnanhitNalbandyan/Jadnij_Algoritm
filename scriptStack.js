    let stack = [];
    let minStack = [];

    function push(item) {
    stack.push(item);
    if (!minStack.length || item <= minStack[minStack.length - 1]) {
        minStack.push(item);
    }
    }

    function pop() {
    let item = stack.pop();
    if (item === minStack[minStack.length - 1]) {
        minStack.pop();
    }
    return item;
    }

    function getMin() {
    return minStack[minStack.length - 1] ? minStack[minStack.length - 1] : null;
    }

    function isEmpty() {
    return stack.length === 0;
    }