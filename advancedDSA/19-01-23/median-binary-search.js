let arr1 = [7,12,14,15];
let arr2 = [1,2,3,4,5,6]

let n1 = arr1.length;
let n2 = arr2.length;

//+1 is added for compensating the arr1.length-1 and arr2.length-1 in the 
//calculations ahead in the function.
let arrMid = Math.floor((n1+n2-1)/2)
function binarySearch(left,right,arr1,arr2){
    if(left > right) return;

    let mid = Math.floor((left+right)/2);

    let left1_Mid = mid;
    let left2_Mid = arrMid-mid; 

    let left1 = left1_Mid > 0 ? arr1[left1_Mid-1] : Number.MIN_VALUE;
    let left2 = left2_Mid > 0 ? arr2[left2_Mid-1] : Number.MIN_VALUE;

}   
binarySearch()