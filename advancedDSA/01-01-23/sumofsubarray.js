//const reset = new Map();
//! map methods // data type matters in map 
//we have to call with the respective data type
//? Maps are iterables
//! Convert MAP to an array // [...map]
//! Convert object to MAP // const Map = new Map(Object.entries(array));
//? set() to add property and value // returns updated map
//? get() to get value of the property // returns value
//? has() to check if the property exits or not // returns true or false
//? delete() deletes the element if exists // returns true if deleted and false if is not deleted
//? clear() deletes all the elements and length will be 0
//? .size to check the length of the MAP



let arr1 = [0, 2, 4, -1, -3, 4, -5, 5]
let sum1 = 0 

function sumOfSubArray1(){
    let map = new Map([])
    sum1 = arr1[0];
    for(let i=0;i<arr1.length;i++){
        sum1 += arr1[i]
        if(sum1===0 || map.has(sum1)){
            console.log(map.get(sum1) || 0, i);
        }
        map.set(sum1, i+1)
    }
}
sumOfSubArray1()

// Understanding the sum = 1
// Algorithm of the problem = 1
// Approach = 3
// Output = 5

// subarray with sum 0
// Input
// arr = [0, 2, 4, -1, -3, 4, -5, 5], check = 0, result = []

// -- algorithm ---
// two pointers i, j and for loop
// for i = 0 => N
// for j = i+1 => N
// sum += arr[j]
// check if sum === 0
// if yes => print [i, j]
// if no => proceed

// inputs
//let arr = [0, 2, 4, -1, -3, 4, -5, 5];

let arr = [0, 2, 4, -1, -3, 4, -5, 5]
let sum = 0;
let check = 0;

function sumOfSubArray(arr, check) {
     for(let i=0;i<arr.length;i++){
        sum = arr[i]
        for(let j=i+1;j<arr.length;j++){
            sum += arr[j]
            if(sum===check){
                console.log(i,j)
            }
        }
     }
     
}
sumOfSubArray(arr,check)