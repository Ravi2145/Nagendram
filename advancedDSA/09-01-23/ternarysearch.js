//BS
//[2,3,5,7,8,9,10,13,14]
//[L,-,-,-,-,-,--,--, R]
//[1/2] Mid [1/2]
//left array || right array

//TS
//[2, 3, 5] p1[7, 8, 9] p2[10, 13,14]
//[L, -, -, -, -, -, -, -, R]
//[1/3]Pivot1 [1/3] Pivot2 [1/3]
//left array || middle array || right array
//pivot1 =0+Math.floor((8-0)/3)//1/3
//pivot2 = (pivot1+1)+pivot1//2/3
function ternarySearch(left,right,arr,find){
    if(right<left){
        return true;
    }
    let p1 = left+Math.floor((right-left)/3);
    let p2 = left+Math.floor((right-left)/1.5);

    if(arr[p1]===find){
        console.log("Found at" ,p1)
        return true;
    }
    if(arr[p2]===find){
        console.log("found at ",p2)
        return true;
    }
    if(find>arr[p1]){
        ternarySearch(left,p1-1,arr,find);
    }
    if(find<arr[p2] && find>arr[p2]){
        ternarySearch(p1+1,p2-1,arr,find)
    }else{
        ternarySearch(p1+1,right,arr,find);
    }
    
}

// function ternarySearch(left,right,arr,find){
//     if(left>right){
//         return true;
//     }
//     let p1 = left+Math.floor((right-left)/2)
//     let p2 = left+Math.floor((right-left)/2)
//     if(arr[p1]===find){
//         console.log("found at ", p1);
//         return true;
//     }
//     if(arr[p1]===find){
//         console.log("found at", p2);
//         return true;
//     }
//     if(find<arr[p1]){
//         ternarySearch(left,p1-1,arr,find);
//     }
//     if(find>arr[p1] && find<arr[p2]){
//         ternarySearch(p1+1,p2-1,arr,find);
//     } 
//     else{
//         ternarySearch(p1+1,right,arr,find);
//     }
// }
let arr = [2,3,5,7,8,9,10,13,14]
let find = 9;
ternarySearch(0,arr.length-1,arr,find);