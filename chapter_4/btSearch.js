//  二叉搜索树

class BiinarySearch {
  root = null

  constructor(key) {  // 节点
    this.key = key // 键
    this.left = null // 左侧节点
    this.right = null // 右侧节点
  }

  // 向树中插入一个新的键
  insertNode(node, newNode) {

  }

  // 听过中序遍历方式遍历所有节点
  inOrderTraverseNode(node, callback)  {

  }

  // 通过先序方式遍历所有节点
  preOrderTraverse(node, callback) {

  }

  // 通过后序方式遍历所有节点
  postOrderTraverse(node, callback) {

  }

  // 返回树中最小的键
  minNode(node) {

  }

  // 返回树中最大的键
  maxNode(node) {

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
tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
tree.preOrderTraverse(printNode) // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
tree.postOrderTraverse(printNode) // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
console.log(tree.min()) // 3
console.log(tree.max()) // 25
console.log(tree.search(10)) // true
console.log(tree.search(100)) // false
tree.remove(25)
tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20