class MyStack:
  def __init__(self):
    self._top = None

  def pop(self):
    if (self._top == None):
      print("Stack is empty")
    else: 
      item = self._top
      self._top = self._top._next
      return item

  def push(self, item):
    t = StackNode(item)
    t._next = self._top
    self._top = t

  def peek(self):
    if (self._top == None):
      print("Stack is empty")
    else: 
      return self._top._data

  def isEmpty(self):
    return (self._top == None)


class StackNode:
  def __init__(self, data):
    self._data = data
    self._next = None

stack = MyStack()

stack.push(1)
stack.push(2)
stack.push(3)

print(stack.pop())

print(stack.peek())

stack.push(43)
print(stack.peek())

print(stack.isEmpty())

stack.pop()
stack.pop()
print(stack.pop())
stack.pop()

print(stack.isEmpty())
print(stack.peek())