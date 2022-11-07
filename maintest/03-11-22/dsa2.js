// Antonio has an array A of size N. Initially all elements of array A are 0. Antonio can perform the following 
//operations on array A.

// Select a subarray and increase each element of this subarray by 1.
// Find the minimum number of operations Antonio needs to perform in order to convert it into another 
//array B(also of size N).

// Input Format

// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting elements of array B.
// Output Format

// Print the minimum number of operations Antonio needs to perform in order to convert it into array B.
// Constraints

// 1<=N<=10^5
// 0<=Bi<=10^9
// Sample Input 1

// 4

// 1 2 2 1

// Sample Output 1

// 2

// Explanation of Sample 1

// Antonio can perform 2 operations as given below :

// Opp 1 : Select subarray A2..3. A becomes = [0 1 1 0]

// Opp 2 : Select subarray A1..4. A becomes = [1 2 2 1]





// function nzArray(arr, n)
// {
//     n=arr.length;
//     for(let i=0;i<n;i++){

//     }
  
// }


// //Driver Code
// var n = readline();
// var temp = readline().trim();
// var s = temp.split(" ");
// for(i=0;i<n;i++)
// {
//     s[i]=Number(s[i]);
// }
// var num  = nzArray(s,n);
// print(num);



function nzArray(arr,n){
    let result = [];
    for(let i=0;i<n;i++){
        result.push(arr[i]+1)
    }
    
    return result;
}
let arr=[0,1,1,0];
console.log(nzArray(arr,arr.length));