const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


class buildList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let newObj = new ListNode(value);
    if (this.head == null) {
      this.head = newObj;
      return;
    }

    function magic(currObj) {
      if (currObj.next == null) {
        currObj.next = newObj;
        return;
      } else {
        magic(currObj.next)
      }
    }
    magic(this.head)
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return
    }

    function around(currObj){
      if (currObj.next.value === value) {
        currObj.next = currObj.next.next
        return
      } else{
        around(currObj.next)
      }
    }
    around(this.head)
  }
}

function removeKFromList(l, k) {
  throw new NotImplementedError('Not implemented');
  let list = new buildList()
  l.forEach(el => {
    list.add(el)
    list.add(el)
  })
  list.remove(k)

}

module.exports = {
  removeKFromList
};
