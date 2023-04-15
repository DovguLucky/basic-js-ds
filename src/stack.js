const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.box = [];
    this.count = 0;
  }
  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.box[this.count] = element;
    this.count += 1;
    return this.count - 1;
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    if (this.count == 0) {
      return undefined;
    }
    let remove = this.box[this.count - 1]
    this.count -= 1;
    return remove
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this.box[this.count - 1]
  }
}

module.exports = {
  Stack
};