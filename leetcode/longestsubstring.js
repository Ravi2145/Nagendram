let longestSubstringWithOutRepeating = (s)=>{
    let max=0;
    let begin = 0;
    let set = new Set()
    for(let end = 0;end<s.length;end++){
        while(set.has(s[end])){
            set.delete(s[begin])
            begin = begin+1;
        }
        set.add(s[end])
        max=Math.max(max,end-begin+1)
    }
    return max;
}
console.log(longestSubstringWithOutRepeating("abcabcb"));
console.log(longestSubstringWithOutRepeating("vhksdsdjkn"));


// let T = Number(readline());
// while (T--) {
// 	var count = 0;
// 	let arr = readline().split(" ");
// 	let L = arr[0];
// 	let R = arr[1];
// 	arr = []
// 	for (let i = L; i <= R; i++) {
// 		if (i % 10 == 2 || i % 10 == 3 || i % 10 == 9) {
// 			arr.push(i)
// 			count++;
// 		}
// 	}
// 	console.log(arr.length)
// }


// Antonio got an array for his Christmas present. The array he got consists of N positive integers.

// He was getting bored on Christmas eve and decided to solve the below problem to overcome his boredom :

// What’s the maximum length subset of the given array such that the sum of all elements of this subset is an odd number.
// Antonio got stuck in the problem and has a party to attend at night. Hence you, being Antonio’s best friend decided to help him solve the problem.

// Given array A, print the maximum possible length of the subset of this array such that the sum of all elements of this subset is an odd number. If there is no such subset print “-1”(without quotes) instead.

// A subset of the array A as a tuple that can be obtained from A by removing some (possibly all) elements of it.

// Input Format

// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format

// Print the maximum possible length of the subset of the given array such that the sum of all elements of this subset is an odd number
// Constraints

// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1

// 4

// 4 2 3 1

// Sample Output 1

// 3

// Explanation of Sample 1

// One can select the subset as [4 2 3 1]. The sum of all elements of this subset = 4+2+1 = 7 which is odd.









// Array Equality

// ARRAY EQUALITY

// Problem Statement

// Amy has an array A, of N integers. She wants to make all the elements of the array equal.

// On each day she can select a subarray of A, with length exactly M and perform following operation:

// · Pick any element of the selected subarray and increase or decrease it by 1. She can perform this operation any number of times she wants (possibly 0), on that day.

// Find the minimum number of days required to make all the elements of the array A equal.

// NOTE: A subarray is the sequence of consecutive elements of the array.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 5
// 1 <= N <= 10^5
// 1 <= Ai <= 10^2
// 1 <= M <= N
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case consists of two space separated integers N and M.
// Second line of each test case consists of N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case single integer denoting the minimum number of days required to make all the elements of the array A equal.
// Sample Input 1

// 1

// 5 3

// 1 2 2 3 1

// Sample Output 1

// 1

// Explanation of Sample 1

 

// On first day she can chose the subarray A[2:4] = { 2, 2, 3} and decrease the first two element of this subarray by 1 and last element by 2. So, A[2:4] = {1, 1, 1}

 

 