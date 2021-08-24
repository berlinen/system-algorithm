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