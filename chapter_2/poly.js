// const ployNode = {
//   coef, // 系数
//   expon, // 指数
//   ployNode * link;  // 指向下一个节点的指针
// }

let node =  {
  coef: 0,
  expon: 0,
  link: null
}

function PolyAdd(p1, p2) {
  let front // 头 节点
  let rear // 尾部 节点
  let temp  // 临时节点
  let sum

  rear = node
  front = rear  // front 记录结果多项式链表的表头节点

  while(p1 && p2) { // 当两个多项式都是非零的时候
    // 比较指数大小
    if(p1.expon > p2.expon) {
      attach(p1.coef, p1.expon, rear)
      p1  = p1.link
    }
    if(p2.expon > p1.expon) {
      attach(p2.coef, p2.expon, rear)
      p2 = p2.link
    }
    if(p1.expon == p2.expon) {
      sum = p1.coef + p2.coef
      if(sum) attach(sum, p1.expon, rear)
      p1 = p1.link
      p2 = p2.link
    }
  }
  // p1 不为空的情况 p1的每一项往后挪
  while(p1) {
    attach(p1.coef, p1.expon, rear)
    p1 = p1.link
  }
  // p2 不为空的情况 p2的每一项往后挪
  while(p2) {
    attach(p2.coef, p2.expon, rear)
    p2 = p2.link
  }

  rear.link = null
  temp = front //
  front = front.link // 令front指向结果多项式的第一个非零项
  return front
}

// 拷贝函数
function attach(coef, expon, rear) {
  // 新节点赋值
  let p = node
  p.coef = coef
  p.expon = expon
  p.link = null

  rear.link = p
  rear = p // 修改rear的值
}


