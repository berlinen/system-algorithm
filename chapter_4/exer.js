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
// 当发现序列中的某个树与t不一致时候，必须吧序列后面的数都读完
function judge(t, n)  {
  let i, v
  let flag = 0 // 0 代表目前还一致， 1代表已经不一致
  scanf("%d", v) // 读取
  if(v !== t.v) flag = 1; // 树根一致 不能一发现问题就退出
  else t.flag = 1

  for(i = 1; i < n; i++) {
    scanf("%d", v) // 读取
    if(!flag && !check(t, v)) flag = 1
  }
  if(flag) return 0
  else return 1
}

// 清除T中各节点的flag标记

function resetT(t) {
  if(t.left) resetT(t.left)
  if(t.right) resetT(t.right)
  t.flag = 0
}

// 释放树空间
function freeT(t) {
  if(t.left) freeT(t.left)
  if(t.right) freeT(t.right)
  free(t)
}




//  ----------------------------------------------------------------

// 逆转链表

//  listnode 构造器 用于创建1链表的每个节点
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 生成链表
function generateLinkList(arr) {
  let head = new ListNode(arr[0]), // 初始化第一个节点作为头节点
      curr = head // curr指针保持当前节点 curr只能保存当前节点，即下一节点还没创建的时候不能提前移动。
  for(let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]) // 创建next 节点
    curr = curr.next // curr 后移一位
  }
  return head // 返回头节点
}

// 调用
const head = generateLinkList([1,2,3,4])

function reverseList(head) {
  let pre = null
  while(head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }

  return pre
}
console.log(reverseList(head))

