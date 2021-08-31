## 平衡二叉树

搜索树节点不同插入次序，将导致不同的深度和平均查找长度ASL

衡量标准

左右两边节点数量差不多

左右两边节点高度差不多

平衡因子：BF = hl - hr  其中hl 和 hr  分别为T的左右子树的高度

平衡二叉树 任意一节点的左右子树高度的绝对值不超过1 即 BF <= 1


### 平衡二叉树的高度能达到log2n么

设nh高度为h的平衡二叉树的最少节点数量， 节点数最少时：

nh = nh-1 + nh-2 + 1

n个节点树最大高度就是 Olog2n

### 平衡二叉树调整

最小失衡子树：在新插入的结点向上查找，以第一个平衡因子的绝对值超过 1 的结点为根的子树称为最小不平衡子树。也就是说，一棵失衡的树，是有可能有多棵子树同时失衡的。而这个时候，我们只要调整最小的不平衡子树，就能够将不平衡的树调整为平衡的树。

平衡二叉树的失衡调整主要是通过旋转最小失衡子树来实现的。根据旋转的方向有两种处理方式，左旋 与 右旋 。

旋转的目的就是减少高度，通过降低整棵树的高度来平衡。哪边的树高，就把那边的树向上旋转。

#### 左旋转

寻找到最小失衡子树

1 节点的右孩子代表此节点

2 节点的右孩子的左子树变为该节点的右子树

3 节点本身变为右孩子的左子树

```java
//RR型调整函数
//返回新父节点
Tree RR_rotate(Tree node){
    //node为离操作结点最近的失衡的结点
    Tree parent=NULL,son;
    //获取失衡结点的父节点
    parent=node->parent;
    //获取失衡结点的右孩子
    son=node->rchild;
    //设置son结点左孩子的父指针
    if (son->lchild!=NULL){
          son->lchild->parent=node;
    }
    //失衡结点的右孩子变更为son的左孩子
    node->rchild=son->lchild;
    //更新失衡结点的高度信息
    update_depth(node);
    //失衡结点变成son的左孩子
    son->lchild=node;
    //设置son的父结点为原失衡结点的父结点
    son->parent=parent;
    //如果失衡结点不是根结点，则开始更新父节点
    if (parent!=NULL){
        //如果父节点的左孩子是失衡结点，指向现在更新后的新孩子son
        if (parent->lchild==node){
            parent->lchild=son;
        }else{
            //父节点的右孩子是失衡结点
            parent->rchild=son;
        }
    }
    //设置失衡结点的父亲
    node->parent=son;
    //更新son结点的高度信息
    update_depth(son);
    return son;
}
6.3 A的左孩子的右子树插入节点(LR)

```
#### 右旋转

1 节点的左孩子代表此节点

2 节点的左孩子右子树变为该节点的左子树

3 将此节点作为左孩子节点的右子树

```java
//LL型调整函数
//返回:新父节点
Tree LL_rotate(Tree node){
    //node为离操作结点最近的失衡的结点
    Tree parent=NULL,son;
    //获取失衡结点的父节点
    parent=node->parent;
    //获取失衡结点的左孩子
    son=node->lchild;
    //设置son结点右孩子的父指针
    if (son->rchild!=NULL)  son->rchild->parent=node;
    //失衡结点的左孩子变更为son的右孩子
    node->lchild=son->rchild;
    //更新失衡结点的高度信息
    update_depth(node);
    //失衡结点变成son的右孩子
    son->rchild=node;
    //设置son的父结点为原失衡结点的父结点
    son->parent=parent;
    //如果失衡结点不是根结点，则开始更新父节点
    if (parent!=NULL){
        //如果父节点的左孩子是失衡结点，指向现在更新后的新孩子son
        if (parent->lchild==node){
            parent->lchild=son;
        }else{
             //父节点的右孩子是失衡结点
              parent->rchild=son;
        }
     }
    //设置失衡结点的父亲
    node->parent=son;
    //更新son结点的高度信息
    update_depth(son);
    return son;
}
```



