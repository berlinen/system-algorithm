// 判断两颗二叉搜索树是否一致

class Node {
  constructor(value) {
    this.lChild = null
    this.rChild = null
    this.value = value
    this.flag = 0  // 作为有没有被访问过的一个标记
  }
}

function main() {
  // 读入N和L
  //  根据第一行序列建树T
  // 依据树T分别判断后面的L个序列是否能与T形成同一个搜索树并输出结果

  return  0
}


// 读数据建立搜索树T

// 判别一序列是否与T构成一样的搜索树
// 如何判别序列是否与树一致
// 在树中按顺序搜索序列的每一个数，如果每次搜索经过的节点在前面都出现过 则一致 否则 不一致
function check(tree, value) {
  if(tree.flag) {
    if(value < tree.value) return check(tree.left, value)
    else if(value  > tree.value) return check(tree.right, value)
    else return 0
  } else {
    if(value === tree.value) {
      tree.flag = 1
      return 1
    }else {
      return 0
    }
  }
}
// 判别
function judge(t, n)  {
  let i, v
  scanf("%d", v) // 读取
  if(v !== t.v) return 0; // 树根一致
  else t.flag = 1

  for(i = 1; i < n; i++) {
    scanf("%d", v) // 读取
    if(!check(t, v)) return 0
  }

  return 1
}

