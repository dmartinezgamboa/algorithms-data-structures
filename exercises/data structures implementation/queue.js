/** Class representing a Queue. */

class Queue {

    constructor() {
        this._storage = {};
        this._start = 0;
        this._end = 0;
    }
    /*
    * Enqueues a new value at the end 
    * of the queue
    * @param {*} value - the value to 
    * enqueue
    */
    enqueue(value) {
        this._storage[this._end] = value;
		this._end++;
    }

    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        if (this._end != this._start) {
            let returnValue = this._storage[this._start];
            delete this._storage[this._start];
            this._start++;
            return returnValue;
        }
		
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} value the first and oldest value in the queue
    */
    peek() {
        console.log(this._storage[this._start]);
    }
}

const MyQueue = new Queue();
console.log(MyQueue);

MyQueue.enqueue('firstVal');
MyQueue.enqueue('secondVal');
MyQueue.enqueue('thirdVal');
MyQueue.enqueue(undefined);
console.log(MyQueue);

MyQueue.dequeue();
MyQueue.dequeue();
MyQueue.dequeue();
MyQueue.dequeue();
MyQueue.dequeue();
MyQueue.dequeue();
MyQueue.dequeue();
MyQueue.dequeue();
console.log(MyQueue);

MyQueue.enqueue('newVal');
MyQueue.enqueue('anotherNewVal');
console.log(MyQueue);

MyQueue.peek();