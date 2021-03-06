### 实际应用场景

#### 是否是同一颗二叉搜索树

给定一个插入序列接可以唯一确定一刻二叉搜索树，然而，一颗给定的二叉搜索树却可以由多种不同的插入序列得到。

例如 按照序列2，1，3  和 2  3 1插入初始为空的二叉搜索树，都得到一样的结果

##### 解题思路

1 分别建两棵搜索树的判别方法

2 不建树的判别方法

   3 1 2 4 vs 3 4 1 2 true 拆分 -> {1, 2} 3 {4}

3 建一棵树，再判别其他序列是否是否与该树一致

#### 反转链表

##### 什么是抽象链表

有块地方存数据

有块地方存指针 下一个节点的地址

```java
Ptr Reverse(head) {
  count = 1
  new = head.next
  old = new.next
  while() {
    temp = old.next
    old.next = new
    new = old
    old = temp
    count++
  }

  head.next.next = old
  return new
}
```