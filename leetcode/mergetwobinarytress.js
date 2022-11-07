

function mergeTwoBinaryTrees(root1,root2){
    if(!root1) return root2;
    if(!root2) return root1;
    if(!root1 && !root2) return null;

    let node = new TreeNode(root1.val+root2.val);
    node.left = mergeTwoBinaryTrees(root1.left,root2.left)
    node.right = mergeTwoBinaryTrees(root1.right,root2.right);
    return node;
}
let root1 =[1,3,2,5], root2=[2,1,3,null,4,null,7]
console.log(mergeTwoBinaryTrees(root1,root2));