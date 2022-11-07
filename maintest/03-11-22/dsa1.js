// EQUALIZE THE ARRAY

// Problem Statement

// Amy has an array A, of N integers. Elements of the array belongs to set S = {5, 13, 17, 18, 19, 24, 32, 37}.

// She has an array B, of N integers, initially all of them are equal to zero. In one operation she can select a 

//non-empty subarray of B, and add X to each of its element. Here X can be either 5, 13 or 19.

// She wants to make array A and B equal, i.e., for each 1<=K<=N, AK is equal to BK by doing operations several times. 

//Find the minimum number of operations required to make array A and B equal. If it is impossible to make array A and B 

//equal then print -1.

// You are given T independent test cases.

// NOTE: A subarray is the sequence of consecutive elements of the array.

// Constraints

// 1 <= T <= 10
// 1 <= N <= 10^5
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case consists of a single integer N.
// Second line of each test case consists of N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case a single integer denoting the minimum number of operations required to make array A and B equal. If it is impossible to make array A and B equal then print -1.

// Sample Input 1

// 1

// 3

// 5 13 18

// Sample Output 1

// 3

// Explanation of Sample 1

 

// Initially B = [0, 0, 0],

// In first operation we chose B[1:1] and add 5, B = [5, 0, 0]

// In second operation we chose B[2:3] and add 13, B = [5, 13, 13]

// In third operation we chose B[3:3] and add 5, B = [5, 13, 18]

// So array B becomes equal to array A.

 
// Function candidate has to implement
function equalizeTheArray(arr, n)
{
    
    let  A=arr;
    let B=[];

    let X=[5,13,18];

    for(let i=0;i<X.length;i++){
        B.push(X[i]);
    }
    if(B==A){
        return A;
    }else{
        return -1
    }
}


//Driver Code
var t =readline();
while(t--)
{
	var n = readline();
	var temp = readline().trim();
	var s = temp.split(" ");
	for(i=0;i<n;i++)
	{
	    s[i]=Number(s[i]);
	}
	var num  = equalizeTheArray(s,n);
	print(num);
}