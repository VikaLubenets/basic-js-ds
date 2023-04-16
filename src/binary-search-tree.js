const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    this.root = null;
  }

  add(data) {
    this.root = addData(this.root, data);

    function addData(node, data){

      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data > node.data){
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }

      return node;
    }

  }

  has(data) {
    return searchData(this.root, data);

    function searchData(node, data){
      if(!node){
        return false;
      }

      if(node.data === data){
        return true;
      }

      if(node.data < data){
        return searchData(node.right, data);
      } else {
        return searchData(node.left, data);
      }

      
    }
    

  }

  find(data) {
    return findNode(this.root, data);

    function findNode(node, data){
      if(!node){return null};

      if(node.data === data){return node};

      if(node.data > data){
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }

    }
    
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};