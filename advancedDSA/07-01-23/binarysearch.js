//binary search

//left - leftmost element of the array/sub-array
//right - rightmost element of the array/sub-array
//mid - randomly calculated middle element of the array.
//mid = floor(r+l)/2

//find = 5
//leftIndex = prev(middleIndex)+1 = 4
//rightIndex = 5
//middleIndex = 5
// let arr = [2,3,4,5,6];
// let find = 5
function binarySearch(left,right,arr){
    //peak condition
    if(right<left){
        console.log(find, "is not present in the array")
        return false;
        }
        let middle = Math.floor((right+left)/2)
        //sucess condition
        if(arr[middle]===find){
            console.log("we got it ",middle);
            return true;
        }
        //left condition
        if(find<arr[middle]){
          return binarySearch(left,middle-1,arr,find);
        }

        //right condition
        if(find>arr[middle]){
           return binarySearch(middle+1,right,arr,find);
        }
    
    return false;
}

binarySearch(0, arr.length-1,arr,find)









// binary search
// Ingredients
// left - leftmost element of the array / sub-array
// right - rightmost element of the array /  sub-array
// mid - randomly calculated middle element of the array.
// mid = floor(r + l / 2)
// Algorithm Logic
// find = 5
// leftIndex = 0
// rightIndex = 5
// middleIndex = 3
// 1. if find === mid return;
// 2. if left part of the array
// 2.1 recurse function
// leftIndex = 0
// rightIndex = Prev(middleIndex) - 1 = 2
// middleIndex = 1
// call 1
// 2. if right part of the array
// 2.1 recurse function
// leftIndex = Prev(middleIndex) + 1 = 4
// rightIndex = 5
// middleIndex = 5
// call 1
let arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 9];
let find = 5;
function binarySearch(left, right, arr, find) {
    // error peak condition
    if (right < left) {
        console.log(find, " is not present in the arr");
        return false;
    }
    // success peak condition
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === find) {
        console.log("We got ", find, " at location ", middle);
        return true;
    }
    // left condition
    if (find < arr[middle]) {
        return binarySearch(left, middle - 1, arr, find);
    }
    // right condition
    if (find > arr[middle]) {
        return binarySearch(middle + 1, right, arr, find);
    }
}
binarySearch(0, arr.length - 1, arr, find);
/*
while(right >= left) {
     calc middle 
     mid check 
     left 
        update right and left indexes
     right
        update right and left indexes
}*/