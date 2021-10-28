// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const cache = {};

function times10(n) {
    cache[n] = n * 10;
    return n * 10;
};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.



function hasBeenCalc(n) {
    if (cache[n]) {
        return true
    } else {
        return false
    }
};

function memoTimes10(n) {
    if (hasBeenCalc(n)) {
        console.log("returning cache value");
        return cache[n]
    } else {
        console.log("returning calculation");
        return times10(n);
    }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached



