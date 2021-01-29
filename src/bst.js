export default class BST {
    constructor() {
        this.root = null;
    }

    insert(insertedNode) {
        if (this.root === null) {
            this.root = insertedNode;
        } else {
            let currentNode = this.root;
            while (true) {
            if (currentNode.data > insertedNode.data) {
                if (currentNode.left === null) {
                currentNode.left = insertedNode;
                return this;
                } else {
                currentNode = currentNode.left;
                }
            } else if (currentNode.data < insertedNode.data) {
                if (currentNode.right === null) {
                currentNode.right = insertedNode;
                return this;
                } else {
                currentNode = currentNode.right;
                }
            } else {
                return this;
            }
            }
        }
    }

    search(value) {
        if (this.root.data === value) {
        return true;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.data === value) {
                    return true;
                } else if (currentNode.data > value) {
                    currentNode = currentNode.left;
                } else if (currentNode.data < value) {
                    currentNode = currentNode.right;
                }
                if (currentNode === null) {
                    return false;
                }
            }
        }
    }

    remove(value) {
        const removeNode = (node, value) => {

            if (!node) { // no node exists
                return null;
            }

            if (value == node.data) { // found node
                if(!node.left && !node.right) { // node is a leaf
                    return null;
                }
                if (!node.left) { // no left child
                    return node.right;
                }
                if (!node.right) { // no right child
                    return node.left;
                }

                let temp = node.left;// assign left child node to temp

                while(!temp.right) { // while there is a right child,
                    temp = temp.right; // traverse right branches
                }
                node.data = temp.value; // replace node value with temp
                node.right = removeNode(node.right, temp.value); // delete leaf

            } else if (node.value > value) { // if target is less, go right
                node.right = removeNode(node.right, value);
                return node; // return updated node after removal
            } else if (node.data < value) { // if target is more, go left
                node.left = removeNode(node.left, value);
                return node;
            }
        }

        this.root = removeNode(this.root, value);
    }

}