// 平衡二叉树

// 构造节点，使用节点的height属性判断是否平衡

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVL {
  constructor () {
    this.root = null
  }

  // 获取节点的高度
  getHeight(node) {
    if(!node) return 0
    return node.height
  }

  // A的右孩子的右子树插入节点(RR)

  // 1 节点的右孩子代表此节点

  // 2 节点的右孩子的左子树变为该节点的右子树

  // 3 节点本身变为右孩子的左子树

  leftRotate(node) {
    let newRoot = node.right // 取出右节点  节点的右孩子代表此节点
    let newNode = newRoot.left // 取出右节点的左子树

    node.right = newNode // 节点的右孩子的左子树变为该节点的右子树
    newRoot.left = node // 节点本身变为右孩子的左子树

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))
    return newRoot
  }
}