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

  // A的左孩子的左子树插入节点(LL)

  // 1 节点的左孩子代表此节点

  // 2 节点的左孩子右子树变为该节点的左子树

  // 3 将此节点作为左孩子节点的右子树

  rightRotate(node) {
    let newRoot = node.left // 节点的左孩子代表此节点
    let newNode = node.left.right // 节点的左孩子右子树

    node.left = newNode //  2 节点的左孩子右子树变为该节点的左子树
    newRoot.right = node // 3 将此节点作为左孩子节点的右子树

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))
    return newRoot
  }

  addNode(value) {
    this.root = this.addChild(this.root, value)
  }

  // 添加一个节点分为四种情况，分别为左子树的左节点，左子树的右节点，右子树的左节点，右子树的右节点。
  // 每种情况都要单独处理
  addChild(node, value) {
    if(!node) return new Node(value)

    if(node.value > value) {
      node.left = this.addChild(node.left, value)
    } else if(node.value < value) {
      node.right =  this.addChild(node.right, value)
    } else {
      node.value = value
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))

    let balance = this.getBalance(node)

    // 左子树左节点，左子树高且左子树的左子树高，左子树可能平衡但整体树不平衡
    if(balance > 1 && this.getBalance(node.left)>= 0) {
      return this.rightRotate(node)
    }

    // 右子树右节点，右子树高且右子树的右子树高，右子树可能平衡，但整体不平衡
    if(balance > 1 && this.getBalance(node.right) >= 0) {
      return this.leftRotate(node)
    }

    // 左子树右节点，左子树高且左子树的右子树高，先左旋再右旋
    if(balance > 1 && this.getBalance(node.left) < 0) {
      node.left  = this.leftRotate(node.left)
      return this.rightRotate(node)
    }

    // 右子树左节点，右子树高且右子树的左子树高，先右旋再左旋
    if(balance > 1 && this.getBalance(node.right) < 0) {
      node.right  =  this.rightRotate(node.right)
      return this.leftRotate(node)
    }

    return node
  }
}