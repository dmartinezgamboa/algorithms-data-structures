// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.

let recursionCounter = 0;
const coins = [10, 6, 1];

// const makeChange = findChange();

console.log(makeChange(12));

function makeChange(value, i) {
    let minCoins;

    if (value == 0) {
        return 0;
    }
    coins.forEach(function checkCoins(coin, i) {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin, i);
            if (minCoins == undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
}
