## 二叉搜索树

查找问题

1 静态查找和动态查找

2 针对动态查找，数据如何组织

二叉搜索树也称二叉排序树或二叉查找树

### 二叉搜索树

一个二叉搜索树可以为空

不为空需要具备

1 非空左子树的所有键值小于其根节点的键值

2 非空右子树的所有键值大于其根节点的键值

3 左右子树都是二叉搜索树

### 二叉搜索树操作的特别函数

find：从二叉搜索树中查找元素x，返回其所在节点的地址

findMin：从二叉树中查找并返回最小元素所在节点地址

findMax：从二叉树中查找并返回最大元素所在节点的地址

inset：插入

delete：删除

#### find

1 从根节点开始，树为空 返回 null

2 若搜索树非空 则根节点关键字和x进行比较， 进行不同处理

* x 小于根节点键值，只需要在左子树继续搜索

* x 大于根节点，只需要在右子树中搜索

*  若两者比较结果相等，搜索完成，返回指向节点的指针

```js
function find(x, bt) {
  if(!bt) return null // 查找失败

  if(x > bt.data) return find(x, bt.right) // 查找右子树

  else if(x bt.data) return find(x, bt.left) // 查找左子树

  else return bt // 查找成果  返回节点的找到节点的地址
}
```