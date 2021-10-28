# memoization, closure, recursion.
# create a generic memoization function that takes a callbackFn to calculate either fibbonaci, or factorial
# no negative numbers as input


def memoized(callbackFn): 
    cache = {}

    def check_cache_or_compute(n): 
        if (n in cache):
            # print("retrieving from cache...")
            return cache[n]
        else:
            # print("computing...")
            return callbackFn(n, cache, check_cache_or_compute)

    return check_cache_or_compute

def compute_factorial(n, cache, check_cache_fn):
    term = n
    if (term == 1):
        cache[n] = 1
        return cache[n]
    else:
        cache[n] = term * check_cache_fn(n-1)
        return cache[n]

def compute_fibbonaci(n, cache, check_cache_fn):
    term = n
    if (term == 0):
        cache[0] = 0
        return cache[0]
    elif (term <= 2):
        cache[1] = 1
        return cache[1]
    else:
        cache[n] = check_cache_fn(n-1) + check_cache_fn(n-2)
        return cache[n]

memoized_factorials = memoized(compute_factorial)
memoized_fibbonaci = memoized(compute_fibbonaci)

print("The factorial of 1 is", memoized_factorials(1))
print("The factorial of 4 is", memoized_factorials(4))
print("The factorial of 7 is", memoized_factorials(7))
print("The factorial of 2 is", memoized_factorials(2))
print("The factorial of 3 is", memoized_factorials(1))

print("index 0 of the Fibbonaci sequence is", memoized_fibbonaci(0))
print("index 4 of the Fibbonaci sequence is", memoized_fibbonaci(4))
print("index 7 of the Fibbonaci sequence is", memoized_fibbonaci(7))
print("index 20 of the Fibbonaci sequence is", memoized_fibbonaci(20))
print("index 10 of the Fibbonaci sequence is", memoized_fibbonaci(10))