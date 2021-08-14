
/**
 * 设计函数分别求两个一元多项式的乘积与和
 * 输入样例
 * 4 3 4  -5 2 6 1 -2 0    第一项4 代表有4项目
 * 3 5 20 -7 4 3 1 有三项
 *
 * 输出
 * 15，24，-35，22，30，21 .....-2 0
 *
 * 多项式表示
 *
 * 仅表示非零项目
 *
 * 数组
 *
 * 链表
 *
 * 好的方法：动态数组
 *
 * PolyNode = {
 *  coef 系数
 *  expon 指数
 *  link 指针
 * }
 *
 * 程序框架
 *
 * 读入多项式1
 *
 * 读入多项式2
 *
 * 乘法运算
 *
 * 加法运算
 *
 *
 * 读多项式
 * 加法实现
 * 乘法实现
 * 多项式输出
 */
const PNODE = {
  link: null
}

function multiSum() {
  let p1, p2, pp, ps
  //  读入
  p1 = readPoly()
  p2 = readPoly()
  // 乘法
  pp = mult(p1, p2)
  // 加法
  ps = add(p1, p2)

  return 0
}
/**
 * 读入多项式
 * rear 初始值是多少
 * 1 初始值设为null 在attach函数中根据reat是否为null1做不同处理
 * 2 rear 指向空节点
 */
function readPoly(n) {
  let p, rear, t, c, e
  p = node // 链表头空节点
  p.link = null
  rear = p
  while(n--) {
    attach(c, e, rear) // 将当前节点插入到尾部
  }
  t = p;
  p = p.link
  return p
}
/**
 * 乘法运算
 */
function mult(p1, p2) {
  if(!p1 || !p2) return null
  let t1 = p1, t2 = p2
  let p = node
  rear = p
  while(t2) {
    // 系数相乘 指数相加
    attach(t1.coef * t2.coef, t1.expon + t2.expon, rear)
    t2 = t2.link
  }

  t1 = t1.link
  while(t1) {
    t2 = p2
    rear = p
    while(t2) {
      t2 = t2.link
    }
    t1 = t1.link
    while(t1) {
      t2 = p2
      rear = p
      while(t2) {
        e = t1.expon + t2.expon
        c = t1.coef * t2.coef
        while(rear.link && rear.link.expon > e) {
          rear = rear.link
        }
        if(rear.link && rear.link.expon === e) {
          if(rear.link.coef + c) {
            rear.link.coef += c
          } else {
            let t = rear.link
            rear.link = t.link
          }
        } else {
          let t = node
          t.coef = c
          t.expon = e
          t.link = rear.link
          rear.link = t
          rear = rear.link
        }
        t2 = t2.link
      }
      t1 = t1.link
    }
  }

}

/**
 * 加法运算
 * 1 乘法转换成加法
 * 2
 */

function add(p1, p2) {
  let t1, t2
  t1 = p1
  t2 = p2
  let p = node
  let rear = p

  while(t1 && t2) {
    if(t1.expon === t2.expon) {
      let sum = p1.coef + p2.coef
      if(sum) attach(sum, t1.expon, rear)
      t1 = t1.link
      t2 = t2.link
    }

    if(t1.expon > t2.expon) {
      attach(t1.coef,t1.expon, rear)
      t1 = t1.link
    }

    if(t2.expon > t1.expon) {
      attach(t2.coef, t2.expon, rear)
      t2 = t2.link
    }
  }

  while(t1) {
    attach(t1.c, t1.expon, rear)
    t1 = t1.link
  }

  while(t2) {
    attach(t2.coef, t2.expon, rear)
    t2 = t2.link
  }

  return p
}

/**
 * @param c 系数
 * @param e 指数
 * @param rear 末项目
 *       Attach
 * rear --------> c e rear
 */

function attach(c, e, rear)  {
  const p = node
  // 新节点赋值
  p.coef = c
  p.expon = e
  p.link = null
  rear.link = p
  rear = p // 修改rear值
}

/**
 * 输出函数
 * @param {*} p
 */
function printp(p) {
  let flag = 0; // f辅助调整输出格式用

  if(!p) {
    console.log('0 0\n')
    return
  }

  while(p) {
    if(flag) {
      flag = 1
    } else {
      console.log(' ')
      console.log('%d %d', p.coef, p.expon)
      p = p.link
    }
  }

  console.log('\n')
}