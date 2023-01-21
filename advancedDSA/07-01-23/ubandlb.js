
let arr = [1,2,3,4,5,5,5,6,7,9]
let find = 5

function upperBoundAndLowerBound(arr, find){
    let left = 0;
    let right=arr.length-1;
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        if(arr[mid]==find){
            console.log(mid)
            if(arr[mid+1]==arr[mid]){
                upperBoundAndLowerBound(arr,find+1);
            }
            return true;
        }else if(arr[mid]<find){
           left = left+1
        }else{
            right = right-1;
        }
    }
    return -1;
}
console.log(upperBoundAndLowerBound(arr,find));