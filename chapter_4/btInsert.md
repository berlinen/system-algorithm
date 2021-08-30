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