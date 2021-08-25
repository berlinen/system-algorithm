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
console.log(head)