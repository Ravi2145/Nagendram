// Question Name: Operation Product

// Problem Statement

// You are given an array A of N integers. You can perform the below operation on the array at most once :

// Choose two integers 1<=i,j<=N.
// Choose two positive integers X and Y and assign Ai = X and Aj = Y, such that the product of all the elements of the array remains the same before and after the operation.
// You need to perform the operation such that after the operation the sum of the elements of array A is minimized. You just need to print the minimum possible sum of the array after the operation.

// Input Format

// First line contains a single integer denoting N.
// The next line contains N space-separated integers denoting the elements of array A.
// Output Format

// Print the minimum possible sum of the array after the operation.
// Constraints

// 2<=N<=10^4
// 1<=Ai<=200
// Sample Input 1

// 5

// 5 3 1 2 4

// Sample Output 1

// 14

// Explanation of Sample 1

// Select i = 3, j=4, X = 2, Y = 2.

// After the operation Array A becomes = [5 3 2 2 2].

// Product of elements of array before operation = 5*3*1*2*4 = 120

// Product of elements of array after operation = 5*3*2*2*2 = 120

// Sum of elements after operation= 5+3+2+2+2 = 14.

 