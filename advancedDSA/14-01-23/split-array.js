//split of an array

let arr = [1,2,3,4,5]
let segment = 3

//[1,2] [3] [4] = [3] [3] [4] = [4]
//[1] [2,3] [4] = [1] [5] [4] = [5]
//[1] [2] [3,4] = [1] [2] [7] = [7]




let n = arr.length;
let sortedArr = arr.sort((a,b)=>a-b);
let minSum = arr[n-1];
let maxSum = arr.reduce((val,curr)=>curr+val,0);
let arrSums = [];
for(let  i=minSum; i<=maxSum; i++){
    arrSums.push(i);
}
console.log(arrSums);
function binarySearch(left,right,arr,segment){
    if(left>right) return;
    let mid = Math.floor((left+right)/2);
    if(isValid(arr,mid,segment)){
        result = mid;
        binarySearch(left,mid-1,arr,segment)
    }else{
        binarySearch(mid+1,right,arr,segment);
    }
}
function isValid(arr,mid,segment){
    let sum = 0;
    let count = 1;
    for(let i = 0;i<n;i++){
        if(arr[i]>mid) return false;
        sum+= arr[i];
        if(sum>mid){
            count++;
            sum = arr[i];
        }
    }
}
//[1][2][3][4][1,2][2,3][3,4]

//[1,2][3][4]=[3][3][4]=[4]