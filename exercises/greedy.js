/**
 * Write a function, makeChange, that returns an integer that represents the least number of 
 *      coins that add up to an amount where the amount is always divisible by 5.
 *      
 * let coins = [5, 10, 25];
 * makeChange(coins,40); -> 3
 */


let coins = [1, 6, 10];

console.log(makeChange(coins, 12));

function makeChange(coins, amount) {
    coins.sort(function(a, b) {
        return b - a;
    });
    let coinAmount = 0;
    let runningTotal = amount;

    for (i in coins) {
        while (runningTotal >= coins[i]) {
            runningTotal -= coins[i];
            coinAmount++;
        }
    }
    return coinAmount;
}

