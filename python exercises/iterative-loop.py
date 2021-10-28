# Task: rewrite this function so that it uses a loop rather than recursion

def joinElements(array, joinString): 
    result = array[0]
    for i in range(1, len(array)):  # start at 1 as [0] index has already been initialized in result
        result += joinString + array[i]
    return result

print(joinElements(['s','cr','t cod', ' :) :)'], 'e'))