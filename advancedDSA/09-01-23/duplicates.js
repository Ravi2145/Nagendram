
let arr = [2,3,5,5,7,8,9,10,13,14]
let find = 5;
function duplicate(left,right,arr,find){
    if(left>right){
        console.log("Duplicate Number Not found at ", find)
        return true;
    }
    let mid = Math.floor((left+right)/2)

    if(arr[mid]===find && (arr[mid-1]==find || arr[mid+1] === find)){
        console.log("Duplicate Number found at ", find)
        return true;
    }
    if(find<arr[mid]){
        duplicate(left,mid-1,arr,find)

    }else{
        duplicate(mid+1,right,arr,find)
    }
}
duplicate(0,arr.length-1,arr,find);
