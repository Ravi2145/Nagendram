

function rearrangeing(arr,size){

    let mid = 0;
    let end = size-1;
    let swap = 0;
    while(mid<=end){
        if(arr[mid]==0){
            mid++;
        }
       else{
            swap = arr[end];
            arr[end] = arr[mid];
            arr[mid] = swap;
            end--;
        }
        
    }
    return arr;
}
var arr = [1,1,0,0,1,0,1,0,1,0];
var size = arr.length;
console.log(rearrangeing(arr,size));

// function printAssendingOrder(array){

//        let count =0
//     for(let i=0;i<array.length;i++){
//             if(array[i]==0)
//             count++;
//     }
//     for(let i=0;i<count;i++){
//         array[i] = 0;
//         for(let i=count;i<array.length;i++){
//             array[i]=1;
//         }
//     }


//     for(let i=0;i<array.length;i++){
//         console.log(array[i]+ " ");
//     }
    
// }

// printAssendingOrder([0,1,1,0,0,1,0,1]);


let movezeros = (arr)=>{
    let n = arr.length;
    if(n == 0 || n == 1){
        return
    }
    let left = 0;
    let right = 0;
    let swap
    while(right<n){
        if(arr[right]==0){
            right++;
        }
        else{
            swap = arr[left];
            arr[left] = arr[right];
            arr[right] = swap;
            right++;
            left++;
        }
    }
    return arr;
}
const arrr= [0,1,1,0,3,0,5,0]
console.log(movezeros(arrr));



