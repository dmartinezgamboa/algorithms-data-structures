def times10(n):
    return n * 10

def memoizeTimesM(callBack):
    cache = {}
    # ******** 
    def checkCache(n):
        if (n in cache):
            print('fetching from cache')
            return cache[n]
        else:
            print('calculating result')
            result = callBack(n)
            cache[n] = result
            return result
    # ******
    return checkCache

newInstance = memoizeTimesM(times10)

print('Task 3 calculated value:', newInstance(9))
print('Task 3 cached value:', newInstance(9))

