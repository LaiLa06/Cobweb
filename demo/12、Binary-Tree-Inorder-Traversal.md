```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 // https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/
var inorderTraversal = function(root) {
    console.log('root',root);
    var arr = [];
    if(!root) return arr;
    let fun = (node)=>{
      var leftSlide = node.left,rightSlide = node.right;
      if(leftSlide){
          fun(leftSlide);
      } 
      if(node.val){ arr.push(node.val)}  
      if(rightSlide){
          fun(rightSlide);
      }
    }
    fun(root)
    return arr
};

```