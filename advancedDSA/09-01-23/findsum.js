let arr= [1,3,4,5,7,10,11,12];
let sum = 11;
function binarysum(left,right,arr,sum){
    if(left>right){
        console.log("Sum not Found")
        return true;
    }

    let mid = Math.floor((left+right)/2)

    if(arr[mid]+arr[mid-1]===sum){
        console.log("Numbers found at ",arr[mid],arr[mid-1])
        return true;
    }
    if(arr[mid]+arr[mid+1]===sum){
        console.log("Numbers found at ",arr[mid],arr[mid+1])
        return true;
    }
    if(sum<arr[mid]+arr[mid-1] || sum<arr[mid]+arr[mid+1]){
        binarysum(left,mid-1,arr,sum);
    }else{
        binarysum(mid+1,right,arr,sum);
    }
}
binarysum(0,arr.length-1,arr,sum);
