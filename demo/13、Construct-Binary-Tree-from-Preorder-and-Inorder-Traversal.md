```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    let target = new TreeNode(preorder[0]);
    let index = inorder.findIndex( j => j == preorder[0]);
    console.log('index',index)
    target.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
    target.right = buildTree(preorder.slice(1+index),inorder.slice(index+1));
    return target
};

```