// 建立堆
// 创建堆，其实是items数组的一个结构调整，让其有堆的特性
function buildHeap(items, heapSize) {
  while(heapSize < items.length - 1) {
    heapSize++
    heapify(items, heapSize)
  }
}

function heapify(items, i) {
  // 自下而上式堆化
  while(Math.floor(i/2) > 0 && items[i] < items[Math.floor(i/2)]) {
    swap(items, i, Math.floor(i/2)) // 交换
    i = Math.floor(i/2)
  }
}

function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 初始有效序列长度为 1
buildHeap(items, 1)
console.log(items)
// [empty, 1, 2, 3, 5, 4]

