## 树的定义

树：n >= 0 个节点构成的有限集合 n = 0 空树

对于任意一个非空树 n > 0 它具备以下性质

树中有一个称为  根 root 的特殊节点 用 r 表示

其余节点可分为m > 0 个互不相交的有限集合 其中每个集合本身又是一棵树 称为原来树的子树

子树是不相交的

除了根节点外，每个节点有且仅有一个负节点

一个n个节点的树有n-1条边


### 树的一些基本术语

1 节点的度： 节点的子树个数

2 树的度：树的所有节点中最大的度数

3 叶节点： 度为0的节点

4 父节点：有字数的节点是其子树的根节点的父节点

5 子节点：若A节点是b节点的父节点则b是a的子节点，子节点也成孩子节点

6 兄弟节点： 具有同一父节点的各节点彼此是兄弟节点

7 路径和路径长度·

8 祖先节点： 沿树根到某一节点的路径上的所有节点都是这个节点的祖先节点

9 子孙节点：某一节点的子树中的所有节点是这个节点的子孙

10 几点的层次：  规定根节点在1层，其他任一节点的层数是其父节点的层数加一

11 树的深度：树中所有节点中的最大层次是这棵树的深度

### 树的表示

链表去表示

儿子-兄弟表示法

      element

firstChild nextSibling

### 二叉树表示

```c
typedef struct TNode *Poisition;
typedef Position BinTree;  /* 二叉树类型 */
struct TNode { /* 树节点定义 */
  ElementType Data; // 节点数据
  BinTree Left; // 左子树
  BinTree Right; // 右子树
}
```

#### 二叉树的定义

一个有穷的节点集合，这个集合可以为空，若不为空，则它是由根节点和左子树和右子树的两个不相交的二叉树组成

二叉树具体五种基本形态

无节点

只有一个节点

只有左节点

只有右节点

左右都不为空

#### 特殊二叉树

1 斜二叉树

一边倒

2 完美二叉树又称满二叉树

3 完全二叉树

有n个节点的二叉树，对树中节点按从上至下，从左到右顺序进行编号，编号为i节点与满二叉树中编号为i节点在二叉树中位置相同

#### 二叉树几个重要性质

一个二叉树第i层的最大节点数为2<sup>i-1</sup> i>= 1

深度为k的二叉树有最大节点总数为 2的k次方 - 1

对任何非空二叉树T，若n0 表示叶节点的个数， n2是度为2的非叶节点个数， 那么两者满足关系 n0 = n2 + 1

叶节点的总数等于有两个儿子的节点的总数加1

#### 二叉树抽象数据类型定义

数据对象集：  一个有穷的节点集合， 若不为空，则由根节点，和其左右二叉树组成

操作集合：

1 判断是否为空

2 遍历，按照某顺序访问每个节点

常用的遍历方法有

* 先序   根 左子树 右子树

* 中序 左子树 根 右子树

* 后序 左子树 右子树  根

* 层次遍历 从上到下 从左到右

3 创建一个二叉树


#### 二叉树的存储结构

1 顺序存储结构 数组存储

完全二叉树：从上至下，从左到右顺序存储n个节点的完全二叉树的节点父子关系：

非根节点（序号 i > 1）的父节点的序号是i / 2

节点：序号为i的左孩子节点的序号是2i 若2i <= n 否则没有左孩子；右节点的序号是2i + 1

一般二叉树也可以采用这种结构，但是会造成空间的浪费

2 链表存储

left  data right

```typescript
interfacre TreeNode {
  data,
  left,
  right
}
```

#### 二叉树的遍历

1 先序遍历 递归程序来实现

先访问根节点 -> 先序遍历其左子树 -> 先序遍历其右子树

```js
function preOrderTraversal(tree) {
  if(tree) {
    console.log(tree.data) // 先访问根节点
    preOrderTraversal(tree.left) // 遍历左节点
    preOrderTraversal(tree.right) // 遍历右节点
  }
}
```

2 中序遍历

中序遍历其左子树 -> 访问根节点 -> 中序遍历其右子树

```js
function inOrderTraversal(tree) {
  if(tree) {
    inOrderTraversal(tree.left) // 遍历左节点
    console.log(tree.data) // 访问根节点
    inOrderTraversal(tree.right) // 遍历右节点
  }
}
```

3 后序遍历

后序左子树 ->  后序右子树 -> 访问根节点

```js
function nextOrderTraversal(tree) {
  if(tree) {
    nextOrderTraversal(tree.left) // 遍历左节点
    nextOrderTraversal(tree.right) // 遍历右节点
    console.log(tree.data) // 访问根节点
  }
}
```

#### 二叉树的非递归遍历

中序遍历非递归遍历算法

非递归算法实现的基本思路：使用堆栈

中序遍历非递归遍历算法

1. 遇到一个节点，就把它压栈，并去遍历他的左子树

2. 当左子树遍历结束后，从栈顶弹出这个节点并访问它

3. 然后按其右指针再去中序遍历该节点的右子树

```js
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
```

先序遍历的非递归遍历算法

```js
function preOrderTraversal(tree) {
  const t = tree
  let s  = creatStack() // 创建并初始化一个堆栈
  while(t || !isEmpty(s)) {
    while(t) { // 一直向左并将沿途节点压入堆栈
      push(s, t)
      console.log(t.data) //  访问打印节点
      t = t.left
    }
    if(!isEmpty(s))  {
      t = pop(s) // 节点弹出堆栈
      t = t.right // 转向右子树
    }
  }
}
```

后序遍历的非递归遍历算法

```java
void MirrorPostTraversal(BinTree BT)//非递归后序遍历
/*算法思想：
1：将先序遍历输出的顺序就是后序遍历输出的镜像顺序。也就是说，将一个二叉树的后序遍历输出就是该二叉树的镜像树的先序输出顺序
2：采用双堆栈，使用一个堆栈(不出栈)记录另一个堆栈使用根右左的顺序时元素的入栈顺序，然后将该堆栈的元素逆序输出即为后序遍历左右根
*/
{
    BinTree T=BT;
    Stack S1,S2;
    S1=CreatStack();//记录访问路径
    S2=CreatStack();//记录后序输出的堆栈的顺序
    while(T||!IsEmpty(S1)){//该循环是为了判定是否完整的遍历了树
        while(T){
            Push(T,S1);
            Push(T,S2);
            T=T->right;//先访问右子树
        }
        if(!IsEmpty(S1)){
            T=Pop(S1);
            T=T->left;
        }
    }
    while(!IsEmpty(S2))//开始访问数据
        printf("%c",Pop(S2)->Data);
}
```

```java
void PostTraversal(BinTree BT)//非递归后序遍历
/*算法思想：
1：将当前结点(根节点)压入堆栈，然后一路向左，将经过元素全部压入堆栈，直到达到最左子树
2：获取栈顶元素并判断当前栈顶元素能否被输出：有三种情况
            a:当前节点没有右子树-->可以访问当前节点-->执行第一步
            b:当前节点的右子树访问已经完成-->可以访问当前结点-->执行第一步
            c:当前节点有右子树，并且还没有访问-->不可以访问当前结点-->首先进入该右子树(以该右子树的根节点为当前结点继续想左访问，重复步骤一)-->执行第一步
*/
{
    BinTree T=BT;
    BinTree pre=NULL;//存储当前节点的前一个结点
    BinTree Ttop;//存储栈顶元素
    Stack S=CreatStack();
    while(T||!IsEmpty(S)){
        while(T){
            Push(T,S);
            T=T->left;
        }
        Ttop=Top(S);//查看当前栈顶元素
        if(Ttop->right==NULL||Ttop->right==pre){//当前结点，既是当前结点，当前节点没有右子树或者右子树已经访问完成(即使pre这个节点已经被访问了)}
            {
                printf("%c",Ttop->Data);//访问数据域
            }
            pre=Ttop;//更新前一个节点的位置
            Pop(S);//弹出该节点
        }
        else{//当前栈顶结点的右子树还没有被进入
            T=Ttop->right;//转向当前节点的右子树，然后从该节点位置开始往最左路径开始压入堆栈，重复操作
        }
    }

```

