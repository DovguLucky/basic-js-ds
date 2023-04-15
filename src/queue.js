const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }


  getUnderlyingList() {
    return this.head
  }

  enqueue(number) {


    class ListNode {
      constructor(x) {
        this.value = x;
        this.next = null;
      }
    }
    let newObj = new ListNode(number);
    if (this.head == null) {
      this.head = newObj;
      return
    }

    function around(currObj) {
      if (currObj.next == null) {
        currObj.next = newObj;
      } else {
        around(currObj.next)
      }
    }
    around(this.head);
    return
  }

  dequeue() {
    if (this.head == null) {
      return null
    }
    let head = this.head.value;
    this.head = this.head.next;
    return head;
  }
}

module.exports = {
  Queue
};