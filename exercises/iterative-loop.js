// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
    result = array[0];
    for (let i = 1; i < array.length; i++) { // start at 1 as [0] index has already been initialized in result.
        result += joinString + array[i];
    }
    return result;
}
  
console.log(joinElements(['s','cr','t cod', ' :) :)'], 'e'));