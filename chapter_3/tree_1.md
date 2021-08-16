## 树

查找

静态查找： 集合记录是固定的 没有插入和删除只有插入

动态查找： 集合是动态变化的， 除查找之外还有插入和删除

### 静态查找

1 顺序查找

```js
// 顺序查找的一种实现（无哨兵）
// 去掉 i >  0 可能会造成数组越界
for(let i = tab.length; i >0 && Tab[i] !== k; i--) {
  return i
}

// 这种算法的时间复杂度为O(n)
```

2 二分查找

假设n个数据元素的关键字满足有序（比如小到大）并且是连续存放，那么可以进行二分查找

```js
function BinarySearch(arr, k) {
  let left = 1, right = -1, mid = -1
  right = arr.length

  while(left <= right) {
    mid = Math.floor((left + right) / 2)

    if(k < arr[mid]) right = mid - 1
    else if(k > arr[mid]) left = mid + 1
    else return mid
  }
  return -1
}

let arr = ['', 0, 1, 2, 3, 4, 5, 6]

console.log(BinarySearch(arr ,0))
```

