const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.head = null;
    }

  root() {
    throw new NotImplementedError('Not implemented');
    return this.head;

  }

  add( newNumb ) {
    throw new NotImplementedError('Not implemented');
    class InfoBlock {
        constructor(number) {
            this.data = number;
            this.leftChild = null;
            this.rightChild = null;
        }
    }
    let newObj = new InfoBlock(newNumb)
    if (this.head == null) {
        this.head = newObj;
        return
    }

    function magic(main) {
        // console.log(main['number'])
        if (newObj.data < main.data) {
            if (main.leftChild != null) {
                magic(main.leftChild)
            } else {
                main.leftChild = newObj;
            }
        } else {
            if (main.rightChild != null) {
                magic(main.rightChild)
            } else {
                main.rightChild = newObj;
            }
        }
    }
    magic(this.head)
}

  has( newNumb) {
    throw new NotImplementedError('Not implemented');


    let position = null;
    if (this.head.data === newNumb) {
        position = true;
        return position;
    }

    function magic(main) {
        if (newNumb < main.data) {
            if (main.leftChild != null) {
                if (main.leftChild.data !== newNumb) {
                    magic(main.leftChild)
                } else {
                    position = true;
                    return position
                }
            } else {
                position = false;
                return position
            }
        } else {
            if (main.rightChild != null) {
                if (main.rightChild.data !== newNumb) {
                    magic(main.rightChild)
                } else {
                    position = true;
                    return position
                }
            } else {
                position = false;
                return position
            }
        }
    }

    magic(this.head)
    return position}

  find( newNumb ) {
    throw new NotImplementedError('Not implemented');


    let position = null;
    if (this.head.data === newNumb) {
        position = this.head;
        console.log(position)
        return position;
    }

    function magic(main) {
        if (newNumb < main.data) {
            if (main.leftChild != null) {
                if (main.leftChild.data !== newNumb) {
                    magic(main.leftChild)
                } else {
                    position = main.leftChild;
                    return position
                }
            } else {
                position = null;
                return position
            }
        } else {
            if (main.rightChild != null) {
                if (main.rightChild.data !== newNumb) {
                    magic(main.rightChild)
                } else {
                    position = main.rightChild;
                    return position
                }
            } else {
                position = null;
                return position
            }
        }
    }

    magic(this.head)
    // console.log(position)
    return position}

  remove( /* data */ ) {
    throw new NotImplementedError('Not implemented');


    if (this.head.data === newNumb) {
        this.head = null;
        return;
    }

    function magic(main) {
        if (newNumb < main.data) {
            if (main.leftChild != null) {
                if (main.leftChild.data !== newNumb) {
                    magic(main.leftChild)
                } else {
                    main.leftChild = null;
                    return;
                }
            } else {
                return;
            }
        } else {
            if (main.rightChild != null) {
                if (main.rightChild.data !== newNumb) {
                    magic(main.rightChild)
                } else {
                    main.rightChild = null;
                    return;
                }
            } else {
                return;
            }
        }
    }
    return magic(this.head)
}

  min() {
    throw new NotImplementedError('Not implemented');

    let position = null;
    if (this.head == null) {
        position = null;
        console.log(position)
        return position;
    }

    function magic(main) {
        if (main.leftChild == null) {
            position = main.data;
            return position;
        } else {
            magic(main.leftChild)
        }
    }
    magic(this.head)
    console.log(position)
    return position

}

  max() {
    throw new NotImplementedError('Not implemented');


    let position = null;
    if (this.head == null) {
        position = null;
        console.log(position)
        return position;
    }

    function magic(main) {
        if (main.rightChild == null) {
            position = main.data;
            return position;
        } else {
            magic(main.rightChild)
        }
    }
    magic(this.head)
    console.log(position)
    return position}
}

module.exports = {
  BinarySearchTree 
};