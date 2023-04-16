const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
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

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data){

      if(!node){return null};

      if(node.data > data){
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right){
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data)
        return node;
      }

    }


  }

  min() {
    if(!this.root){
      return null;
    }

    let node = this.root;
    while(node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.root){
      return null;
    }

    let node = this.root;
    while(node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};