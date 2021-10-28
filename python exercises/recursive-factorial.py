
def memoized_factorial(): 
    factorial_cache = {}

    def check_cache_or_compute(n): 
        if (n in factorial_cache):
            return factorial_cache[n]
        else:
            return compute_factorial(n)

    def compute_factorial(n):
        term = n
        if (term == 1):
            factorial_cache[n] = 1
            return factorial_cache[n]
        else:
            factorial_cache[n] = term * check_cache_or_compute(n - 1)
            return factorial_cache[n]

    return check_cache_or_compute


memoized_factorials = memoized_factorial()

print("The factorial of 1 is", memoized_factorials(1))
print("The factorial of 4 is", memoized_factorials(4))
print("The factorial of 7 is", memoized_factorials(7))
print("The factorial of 2 is", memoized_factorials(2))
print("The factorial of 1 is", memoized_factorials(1))