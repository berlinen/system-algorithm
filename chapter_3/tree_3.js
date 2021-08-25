// treeNode构造器
class treeNode {
  constructor(val, left, right) {
      this.val = (val == undefined ? 0 : val);
      this.left = (left == undefined ? null : left);
      this.right = (right == undefined ? null : right);
  }
}

// 生成二叉树
function generateBinarySearchTree(arr) {
  let root = new treeNode(arr[0]),
      curr = root,
      queue = new Array(),
      n = 0;
  queue.push(curr);
  while(queue.length > 0) {
      let size = queue.length;
      for(let i=0; i<size; i++) {
          curr = queue.pop();
          curr.left = arr[n+1] ? new treeNode(arr[n+1]) : null;
          curr.left && queue.unshift(curr.left); // 如果是null就不入队
          n++;

          curr.right = arr[n+1] ? new treeNode(arr[n+1]) : null;
          curr.right && queue.unshift(curr.right); // 如果是null就不入队
          n++;
      }
  }
  return root
}

console.log(generateBinarySearchTree([1, 2, 3, 4, 5, 6, 7]))