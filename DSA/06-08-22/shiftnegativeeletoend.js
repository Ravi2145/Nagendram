

function shift(array){
    let n=array.length;
    let temparr = new Array(n);
    let j=0;

    for(let i=0;i<n;i++){
        if(array[i]>=0){
            temparr[j]=array[i];
            j++;
        }
    }
    if(n==0 || j==1){
        return;
    }
    for(let i=0;i<n;i++){
        if(array[i]<0){
            temparr[j]=array[i];
            j++;
        }
    }
    for(let i=0;i<n;i++){
        array[i]=temparr[i];
    }
}
let arr1 = [1,2,-3,-4,5,6,-9,-8,10,11];
shift(arr1);
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]+" ");
}



   

//     function shiftNegativeElements(arr)
// {
//     let n = arr.length;
//     let tempArray= new Array(n);
//     let j = 0;
    
//     for (let i = 0; i < n ; i++){
//         if (arr[i] >= 0 ){
//             tempArray[j++] = arr[i];
//         }
//     }       
//     if (j == n || j == 0){
//         return;
//     }
//     for (let i = 0 ; i < n ; i++){
//         if (arr[i] < 0){
//             tempArray[j++] = arr[i];
//         }
//     }
//    for (let i = 0; i < n ; i++){ 
//    arr[i] = tempArray[i];
//    }
// }


// var arr= [-5, 3, -4, 88, -9, -10, 21, 5, 6];


// shiftNegativeElements(arr);

// for (let i = 0; i < arr.length; i++){
// console.log(arr[i] + " ");
// }




let shift1 = (arr)=>{
    let n= arr.length;
    let tempArr = new Array(n);
    let j=0;
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            tempArr[j++] = arr[i];
        }
    }
    for(let i=0;i<n;i++){
        if(arr[i]<0){
            tempArr[j++] = arr[i];
        }
    }
    return tempArr;
}
let arr = [-1,-2,-3,-4,-5,9,-10,3,4,5,-6]
console.log(shift1(arr));