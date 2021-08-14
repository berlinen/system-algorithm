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
  front = rear

  while(p1 && p2) {
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

}

// 拷贝函数
function attach(coef, expon, rear) {
  const link = {
    coef,
    expon
  }
  rear.link = link
  return rear
}