// Question Name: GCD C

// Problem Statement

// Your friend Antonio is not a cool guy. While talking to his girlfriend he started discussing coding problems. Unfortunately, his girlfriend is also a pro-coder like you. Seeing Antonio trying to be oversmart, she asked him Q queries.

// In each query, she gives Antonio three integers A, B and C, and asks him :

// If there exists two integers x,y such that A<=x<y<=B and GCD(x,y) = C.
// Now, Antonio is unable to solve this problem and asks you to help. Help him to save his relationship.

// The greatest common divisor (GCD) of two nonzero integers a and b is the greatest positive integer d such that d is a divisor of both a and b.

// Input Format

// First line of input contains a single integer T, denoting the number of test cases.
// First line of every test case contains three space-separated integers denoting A, B, and C.
// Output Format

// For every testcase print “YES” if there exist two integers x,y such that A<=x<y<=B and GCD(x,y) = C, else print “NO”.
// Constraints

// 1<=T<=5
// 1<=A<B<=2*10^9
// 1<=C<=2*10^9
// Sample Input 1

// 2

// 2 4 2

// 3 5 3

// Sample Output 1

// YES

// NO

// Explanation of Sample 1

// In test case 1, take x=2, y=4. GCD(2,4) = 2.

// In test case 2, possible (x,y) pairs are (3,4), (3,5), (4,5). GCD of all these pairs is 1