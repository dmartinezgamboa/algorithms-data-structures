/** Class representing a Stack. */

class Stack {
	constructor() {
    	this._storage = {};
		this._length = 0;
	}
  /*
  * Adds a new value at the end of the 
  * stack
  * @param {*} value the value to push
  */
	push(value) {
		this._storage[this._length] = value;
		this._length++;
	}

	/*
	* Removes the value at the end of the stack and returns it
	* @return {*} the last and newest value in the stack
	*/
	pop() {
		if (this._length) {
			let returnVal = this._storage[this._length-1];
			delete this._storage[this._length-1];
			this._length--;
			return returnVal;
		}
	}
	/*
	* Returns the value at the end of the stack without removing it
	* @return {*} the last and newest value in the stack
	*/
	peek() {
		if (this._storage[this.length - 1]){
			console.log(this._storage[this._length-1]);
		} else console.log("ERROR");
		
	}
}

const MyStack = new Stack();
console.log(MyStack);

let someFunc = function anotherFuncName(arg) {
	for (i in arg) {
		return 5;
	}
}

MyStack.push("hello");
MyStack.push(someFunc);
console.log(MyStack);

MyStack.push("howdy");
MyStack.pop();
MyStack.pop();
MyStack.pop();
MyStack.peek();
// console.log(MyStack);
