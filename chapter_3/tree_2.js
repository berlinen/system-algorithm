// 中序遍历

function inOrderTraversal(tree) {
  const t = tree
  let s  = creatStack() // 创建并初始化一个堆栈
  while(t || !isEmpty(s)) {
    while(t) { // 一直向左并将沿途节点压入堆栈
      push(s, t)
      t = t.left
    }
    if(!isEmpty(s))  {
      t = pop(s) // 节点弹出堆栈
      console.log(t.data) //  访问打印节点
      t = t.right // 转向右子树
    }
  }
}

class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }
  // stack methods
  push(item) {
    this.dataStore.push(item)
    this.top++
  }
  // 删除栈顶元素，并返回它
  pop() {
    this.top--
    return this.dataStore.pop()
  }
  // 返回栈顶元素
  peek() {
    return this.dataStore[this.top - 1]
  }
  // size
  size() {
    return this.top
  }
  // clear
  clear() {
    this.dataStore = []
  }
}