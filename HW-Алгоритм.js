class DynamicArray {
    constructor(capacity = 4) {
        this.capacity = capacity;
        this.arr = new Array(capacity);
        this.size = 0;
    }

    add(data) {
        if (this.size === this.capacity) {
            this.growSize();
        }
        this.arr[this.size++] = data;
    }

    remove() {
        if (this.size === 0) {
            throw new Error('Cannot remove from empty array');
        }
        const removed = this.arr[--this.size];
        this.arr[this.size] = null;
        return removed;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }
        const removed = this.arr[index];
        for (let i = index; i < this.size - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.arr[--this.size] = null;
        return removed;
    }

    growSize() {
        const newCapacity = this.capacity * 2;
        const newArr = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
        this.capacity = newCapacity;
    }

    set(index, data) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }
        this.arr[index] = data;
    }

    clean() {
        for (let i = 0; i < this.size; i++) {
            this.arr[i] = null;
        }
        this.size = 0;
    }

    contains(data) {
        for (let i = 0; i < this.size; i++) {
            if (this.arr[i] === data) {
                return true;
            }
        }
        return false;
    }

    isEmpty() {
        return this.size === 0;
    }
}

function countLetters(str) {
    let letters = {};
    for (let i = 0; i < str.length; i++) {
        if (letters[str[i]] === undefined) {
            letters[str[i]] = 1;
        } else {
            letters[str[i]]++;
        }
    }
    return letters;
}

console.log(countLetters("абракадабра"));