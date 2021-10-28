/**
 * TASK: implement mergesort!
 *  protip: Split the array into halves and merge them recursively 
 *  protip: return once we hit an array with a single item. That is a sorted array of size 1!
 *  protip: compare the arrays item by item and return the concatenated result
 */ 

let array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));

function mergeSort(wholeArray) {
    if (wholeArray.length == 1) { //recursion base condition
        return wholeArray
    } else { 
        let midIndex = Math.floor(wholeArray.length / 2);
        let arrayL = wholeArray.slice(0, midIndex);
        let arrayR = wholeArray.slice(midIndex);
        return merge(mergeSort(arrayL), mergeSort(arrayR));
    }
}

function merge(leftArray, rightArray) {
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            mergedArray.push(leftArray[i]);
            i++;
        } else {
            mergedArray.push(rightArray[j]); 
            j++;
        }   
    }
    while (i < leftArray.length) {
        mergedArray.push(leftArray[i]);
        i++;
    }
    while(j < rightArray.length) {
        mergedArray.push(rightArray[j])
        j++;
    }
    return mergedArray;
}

