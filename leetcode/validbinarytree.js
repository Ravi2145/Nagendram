let validateBinaryTree = (root)=>{
    return dfs(root,-Infinity,Infinity)
};
function dfs(node,min,max){
    if(!node){
        return;
    }
    else if(node.val<=min||node.val>=max){
        return false;
    }
    return dfs(node.left,min,node.val) && dfs(node.right,node.val,max)
}




















Consider the following program fragment used by 3 process concurrently using a counting seamaphore S count is initialized to 0 After the excution of code the value of count is observed to be 9. Find the minimum value of S that would have been initialized to obtain the output
1656750198_1656750198q10.png


















A binary search tree is generated by inserting in order the following integers: 50, 15, 62, 5, 20, 58, 91, 3, 8, 37, 60, 24. The number of nodes in left sub-tree and right sub-tree of the root respectively is:
Options

(4, 7)

(8,3)

(7,3)

(7,4)





While inserting the elements 85,67,75,60,58,72 in an empty binary search tree, find the element in the lowest level?
Options

60

85

72

58





Choose the incorrect statement with respect to relational operators?

Options

Can be used on structure


Can be used on long data types


Can be used on strings


Can be used on float data types




What is the number of edges in a complete graph of n vertices?
Options

2*n

n*(n-1)

n*(n-1)/2

n*(n+1)/2




What is the output of the following pseudo code?

int a =456, b, c, d = 10;

b=a/d;

c=a-b;

print c;

Options

411


410.1


410


365