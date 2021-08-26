//  二叉搜索树

function Node(key) {
  this.key = key // 键
  this.left = null // 左侧节点
  this.right = null // 右侧节点
}

class BiinarySearch {
  root = null

  // 向树中插入一个新的键
  insertNode(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  insert(key) {
    let newNode = new Node(key)
    if(this.root === null) { //第一个键
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  // 通过中序遍历方式遍历所有节点
  inOrderTraverseNode(node, callback)  {
    if(node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  // 通过先序方式遍历所有节点
  preOrderTraverseNode(node, callback) {
    if(node !== null) {
      callback(node.key)
      this.preOrderTraverse(node.left, callback)
      this.preOrderTraverse(node.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  // 通过后序方式遍历所有节点
  postOrderTraverseNode(node, callback) {
    if(node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  // 返回树中最小的键
  minNode(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  min() {
    return this.minNode(this.root)
  }

  // 返回树中最大的键
  maxNode(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  max() {
    return this.maxNode(this.root)
  }

  // 在树中查找一个键 如果节点存在， 则返回true 如果节点不存在 则返回false
  searchNode(node, key) {

  }

  // 从树中移除指定键
  removeNode(node, key) {

  }

}

function printNode(v) {
  console.log(v)
}

let tree = new BiinarySearch()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
// tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
// tree.preOrderTraverse(printNode) // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
// tree.postOrderTraverse(printNode) // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
// console.log(tree.min()) // 3
// console.log(tree.max()) // 25
// console.log(tree.search(10)) // true
// console.log(tree.search(100)) // false
// tree.remove(25)
// tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20