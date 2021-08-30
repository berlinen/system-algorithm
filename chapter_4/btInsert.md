## 二叉搜索树的插入

关键是要找到元素应该插入的位置，可以采用与find类似的方法

```js
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
```

### 二叉搜索树的删除

三种情况

1 要删除的是叶节点：直接删除，并在修改其父节点指针 设置为null

2 要删除的节点只有一个孩子节点

将其父节点的指针指向要删除节点的孩子节点

3 要删除的节点有左右两颗子树

用另一节点替代被删除的节点：右子树的最小元素或者左子树的最大元素

就是取右子树的最小元素替代  或者取左子树的最大元素替代

```js
 // 从树中移除指定键
  removeNode(node, key) {
    if(node === null) return null

    if(key < node.key) {    //  左子树递归删除
      node.left = this.removeNode(node.left, key)
      return node
    } else if(key > node.key) { // 右子树递归删除
      node.right = this.removeNode(node.right, key)
      return node
    } else  {  // 找到了要删除的节点
      if(node.left === null && node.right  === null) {
        node = null
        return node
      }
      if(node.left  === null) { // 无左孩子
        node = node.right
        return node
      } else if(node.right === null) { // 无右孩子
        node =  node.left
        return node
      }
      // 左右子树都不为空的情况下
      // 取右子树的最小元素
      let aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
```

