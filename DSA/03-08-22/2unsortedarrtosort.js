
// Javascript program to merge two unsorted lists
// in sorted order
 
// Function to merge array in sorted order
function sortedMerge(a, b,res,n, m){
  
// Sorting a[] and b[]
    a.sort((a,b) => a-b);
    b.sort((a,b) => a-b);

// Merge two sorted arrays into res[]
        let i = 0, j = 0, k = 0;
        while (i < n && j < m) {
            if (a[i] <= b[j]) {
                res[k] = a[i];
                i += 1;
                 k += 1;
        } else {
            res[k] = b[j];
            j += 1;
            k += 1;
    }
}   
    while (i < n) { // Merging remaining
// elements of a[] (if any)
        res[k] = a[i];
        i += 1;
        k += 1;
}   
while (j < m) { // Merging remaining
// elements of b[] (if any)
        res[k] = b[j];
        j += 1;
        k += 1;
    }
    
}

// Driver code

let a = [ 10, 5, 15 ];
let b = [ 20, 3, 2, 12 ];
let n = a.length;
let m = b.length;

// Final merge list
let res = new Array(n + m);

sortedMerge(a, b,res,n, m);

console.log("Sorted merge list :");
for (let i = 0; i < n + m; i++)
console.log(" " + res[i]);


//This code is contributed by Mayank Tyagi



// arr=[10,5,15]
// arr1=[20,3,2,12]
// arr.sort((arr,arr1)=>arr-arr1);
// //arr1.sort((arr,arr1)=>arr-arr1);
// //console.log(arr);
// console.log(arr1);

arr = [12,7,4,3,9,32];
arr.sort((a,b)=>a-b);
console.log(arr);
arr1 = [10,50,20,14];
arr1.sort((a1,b1)=>a1-b1);
console.log(arr1);




// let merge = (a,b,res,n,m)=>{
//     a.

// }

// let a = [17,5,4,2,3,8]
// let b = [10,20,30]
// merge(a,b,)
