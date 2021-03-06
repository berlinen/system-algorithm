// 最长公共前缀v
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    // 初始化 Trie 树
    let trie = new Trie()
    // 构建 Trie 树
    for(let i = 0; i < strs.length; i++) {
        if(!trie.insert(strs[i])) return ""
    }
    // 返回最长公共前缀
    return trie.searchLongestPrefix()
};
// Trie 树
var Trie = function() {
    this.root = new TrieNode()
};
var TrieNode = function() {
    // next 放入当前节点的子节点
    this.next = {};
    // 当前是否是结束节点
    this.isEnd = false;
};
Trie.prototype.insert = function(word) {
    if (!word) return false
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode()
        }
        node = node.next[word[i]]
    }
    node.isEnd = true
    return true
};
Trie.prototype.searchLongestPrefix = function() {
    let node = this.root
    let prevs = ''
    while(node.next) {
        let keys = Object.keys(node.next)
        if(keys.length !== 1) break
        if(node.next[keys[0]].isEnd) {
            prevs += keys[0]
            break
        }
        prevs += keys[0]
        node = node.next[keys[0]]
    }
    return prevs
}

// 解法一：逐个比较
// 解题思路： 从前往后依次比较字符串，获取公共前缀

var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  let prevs = strs[0]
  for(let i = 1; i < strs.length; i++) {
      let j = 0
      for(; j < prevs.length && j < strs[i].length; j++) {
          if(prevs.charAt(j) !== strs[i].charAt(j)) break
      }
      prevs = prevs.substring(0, j)
      if(prevs === "") return ""
  }
  return prevs
};