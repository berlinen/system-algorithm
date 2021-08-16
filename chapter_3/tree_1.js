// 顺序查找的一种实现（无哨兵）
// for(let i = tab.length; i >0 && Tab[i] !== k; i--) {
//   return i
// }

// 二分查找 (Binary  Search)
// 数组第一项为空
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



