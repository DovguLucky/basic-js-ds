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
        return this.head;
    }

    add(newNumb) {
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

    has(newNumb) {
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
        return position
    }

    find(newNumb) {
        let position = null;
        if (this.head.data === newNumb) {
            position = this.head;
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
        return position
    }

    remove(newNumb) {
        if (this.head.data === newNumb) {
            if (this.head.leftChild == null && this.head.rigthChild == null) {
                this.head = null;
                return;
            } else if (this.head.leftChild == null && this.head.rigthChild != null) {
                this.head= this.head.rightChild;
                return;
            } else if (this.head.leftChild != null && this.head.rigthChild == null) {
                this.head = this.head.leftChild;
                return;
            } else {
                function arounBranch(branch) {
                    if (branch.leftChild == null) {
                        this.head = branch;
                        return
                    } else {
                        arounBranch(branch.leftChild)
                    }
                }
                arounBranch(this.head.rightChild)
                return;
            }
        }

        function magic(main) {
            if (newNumb < main.data) {
                if (main.leftChild != null) {
                    if (main.leftChild.data !== newNumb) {
                        magic(main.leftChild)
                    } else {
                        if (main.leftChild.leftChild == null && main.leftChild.rigthChild == null) {
                            main.leftChild = null;
                            return;
                        } else if (main.leftChild.leftChild == null && main.leftChild.rigthChild != null) {
                            main.leftChild = main.leftChild.rightChild;
                            return;
                        } else if (main.leftChild.leftChild != null && main.leftChild.rigthChild == null) {
                            main.leftChild = main.leftChild.leftChild;
                            return;
                        } else {
                            function arounBranch(branch) {
                                if (branch.leftChild == null) {
                                    main.leftChild = branch;
                                    return
                                } else {
                                    arounBranch(branch.leftChild)
                                }
                            }
                            arounBranch(main.leftChild.rightChild)
                            return;
                        }
                    }
                } else {
                    return;
                }
            } else {
                if (main.rightChild != null) {
                    if (main.rightChild.data !== newNumb) {
                        magic(main.rightChild)
                    } else {
                        // main.rightChild = null;
                        // return;
                        if (main.rightChild.leftChild == null && main.rightChild.rigthChild == null) {
                            main.rightChild = null;
                            return;
                        } else if (main.rightChild.leftChild == null && main.rightChild.rigthChild != null) {
                            main.rightChild = main.rightChild.rightChild;
                            return;
                        } else if (main.rightChild.leftChild != null && main.rightChild.rigthChild == null) {
                            main.rightChild = main.rightChild.leftChild;
                            return;
                        } else {
                            function arounBranch(branch) {
                                if (branch == null) {
                                    main.rightChild = branch;
                                    return
                                } else {
                                    arounBranch(branch.leftChild)
                                }
                            }
                            arounBranch(main.rightChild.rightChild)
                            return;
                        }
                    }
                } else {
                    return;
                }
            }
        }
        return magic(this.head)
    }

    min() {
        let position = null;
        if (this.head == null) {
            position = null;
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
        return position
    }

    max() {
        let position = null;
        if (this.head == null) {
            position = null;
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
        return position
    }
}

module.exports = {
    BinarySearchTree
};