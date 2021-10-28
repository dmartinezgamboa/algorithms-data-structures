const memoizationClosure9 = memoizedClosure(times10);

console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
console.log('Task 3 calculated value:', memoizationClosure9(9));	// calculated
console.log('Task 3 cached value:', memoizationClosure9(9));	// cached

// ****************************************
function memoizedClosure(callBack) {
    let cache = {};
    return checkCache;

    // **********************
    function checkCache(n) {
        if (n in cache) {
            console.log('Fetching from cache:', n);
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = callBack(n);
            cache[n] = result;
            return result;
        }
    };
};
function times10(n) {
    return n * 10;
}



  

