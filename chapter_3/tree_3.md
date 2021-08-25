## 树的同构问题

给定两棵树T1和T2 如果t1可以通过若干次左右孩子互换就变成t2，则我们称两棵树是同构的 现给定两棵树，判断他们是否是同构的

1 二叉树表示

静态链表

   a   b   c   d
l -1   2  -1  -1
r 1    3  -1  -1
i 0    1   2   3
```js
const TreeNode =  {
  element,
  left,
  right
}

T1  = [TreeNode]
T2  = [TreeNode]
```

2 建立二叉树
```js
function main () {
  const r1 = buildTree(t1)
  const r2 = buildTree(t2)
  // 判断r1 r2  是否是同构
  if(isSomorphic(r1, r2)) console.log('yes')
  else console.log('no')

  return 0
}

function
```

3 同构判别

