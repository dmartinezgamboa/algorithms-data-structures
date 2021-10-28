/**
 * create function that implements bubblesort algorithm, use recursion.
 * 
 * someFunc([4, 8, 5, 2]) -> [2, 4, 5, 8]
 */

let array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(runThroughSort(array1));
console.log(runThroughSort(array2));
console.log(runThroughSort(array3));


function runThroughSort(unsortedArray) {
    let noSwaps = true;
    let sortedArray = unsortedArray;

    for (let i = 0; i < sortedArray.length; i++) { // Checks if necessary to swap values.
        if (sortedArray[i] > sortedArray[i+1]) { 
            let tempValA = sortedArray[i];
            let tempValB = sortedArray[i+1];
            sortedArray[i] = tempValB;
            sortedArray[i+1] = tempValA;
            noSwaps = false;
        }
    }

    if (noSwaps) { // Recursion base condition.
        return sortedArray
    } else {
        return runThroughSort(sortedArray);
    }
}


