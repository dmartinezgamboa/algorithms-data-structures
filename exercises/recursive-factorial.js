/* 
TASK: implement a factorial function using recursion, memoization, closure

int -> int

example: memoizedFactorials(3) -> returns 6 
*/


const memoizedFactorials = memoizedFactorial();

console.log(`factorial of 1 is ${memoizedFactorials(1)}`);
console.log(`factorial of 4 is ${memoizedFactorials(4)}`);
console.log(`factorial of 100 is ${memoizedFactorials(100)}`);
console.log(`factorial of 1 is ${memoizedFactorials(1)}`);

//**************************
function memoizedFactorial() {
    let factorialCache = {};
    return checkCacheOrCompute;

    // *************************
    function checkCacheOrCompute(n) {
        if (n in factorialCache) {
            console.log(`fetching from factorialCache[${n}]:`)
            return factorialCache[n];
        } else {
            console.log(`computing...`)
            return computeFactorial(n);
        }
    }
    // *************************
    function computeFactorial(n) {
        let term = n
        if (term == 1) {
            factorialCache[n] = 1;
            return factorialCache[n];
        } else {
            factorialCache[n] = term * checkCacheOrCompute(n - 1);
            return factorialCache[n];
        }
    }
}


