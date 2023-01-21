//find peak element using binary search

//let arr = [1,2,3,4,5,6,,10,15,8];
let arr = [1,2,1,3,4,5,6,10,15];
//let arr = [1,2,3,4,5,6,7,8];

//Bs
//mid = 4
//mid != n-1 && (mid+1)>mid
//search on right

function binarySearch(left,right,arr){
    if(left>right) return;

    let mid = Math.floor((left+right)/2);

    if(
        (mid === 0 || arr[mid]>arr[mid-1]) &&
        (mid === arr.length-1 || arr[mid]>arr[mid+1])
        //(mid<0 || arr[mid-1] < arr[mid]) &&
        //(mid<arr.length-1 || )
    ){
       return mid;
    }
    if(mid === 0 || arr[mid]<arr[mid-1])
    {
        return binarySearch(left,mid-1,arr)
    }
    else return binarySearch(mid+1,right,arr);
}

console.log("peak element is : ", arr[binarySearch(0,arr.length-1,arr)])
