/** Class representing a Singly Linked List. */

class LinkedList {

    constructor() {
        // this._storage = {};
        this._head;
        this._tail;
    }
    /*
    * Inserts a new value to the end of the linked list
    * @param {*} value - the value to insert
    * .insert(first);
    * .insert(second);
    * this._storage = {{value: "first", next: {value:"second", next: {value: "third", next: null}}}
    */
    insert(value) {
        if (this._head == undefined) {
            this._head = {value, next: null};
            this._tail = this._head;
        }
        else {
            let nextNode = {value, next: null};
            this._tail.next = nextNode;
            this._tail = nextNode;
        } 
    }

    /*
    * Deletes a node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */

    remove(value) {
        let currentNode = this._head;

        // check if head 
        if (this._head.value == value) {
            console.log(`Removed ${value}`);
            this._head = currentNode.next;
            return;
        }
        // check if a node between head and tail
        while (currentNode.next != null) {
            if (currentNode.next == this._tail) {
                console.log(`Removed ${value}`);
                currentNode.next = null;
                this._tail = currentNode;
                return;
            }
            if (currentNode.next.value == value) { // moving the next reference
                console.log(`Removed ${currentNode.next.value}`);
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */
    removeTail() {
        let currentNode = this._head;
        while (currentNode.next != this._tail) {
            currentNode = currentNode.next;
        }
        this._tail = currentNode;
        currentNode.next = null;
    }
    /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    contains(value) {
        let currentNode = this._head;
        let contains = false;

        while (currentNode != null) {
            if (currentNode.value == value) {
                contains = true;
                console.log(`Contains ${currentNode.value}`);
                break;
            }
            currentNode = currentNode.next;
        } 
        if (!contains) {
            console.log(`${value} Not found`)
        }
    }  
    /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    isHead(node) {
        if (node == this._head) {
            return true;
        }
        return false;
    }
    /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    isTail(node) {
        if (node == this._tail) {
            return true;
        }
        return false;
    }
}

const MyList = new LinkedList();

MyList.insert("1");
MyList.insert("2");
MyList.insert("3");
MyList.insert("4")
MyList.insert("5");
MyList.insert("6");

console.log(JSON.stringify(MyList));
MyList.remove("1");
MyList.remove("4");
MyList.remove("6");

MyList.contains("2");
MyList.contains("6");
MyList.contains("70");


// MyList.removeTail();
console.log(JSON.stringify(MyList));