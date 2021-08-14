
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
 */
function readPoly() {

}
/**
 * 乘法运算
 */
function mult(p1, p2) {

}

/**
 * 加法运算
 */

function add(p1, p2) {

}

/**
 * @param c 系数
 * @param e 指数
 * @param rear 末项目
 *       Attach
 * rear --------> c e rear
 */

function attach(c, e, rear)  {

}