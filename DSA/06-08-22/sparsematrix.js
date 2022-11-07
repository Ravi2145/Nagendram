

// function sparseMatrix(array,m,n){
    
//     for(let i=0;i<m;i++){
//         let count =0;
//         for(let j=0;j<n;j++){
//             if(array[i][j]==0){
//                  count++;
//             }
//         }
//     return (count>parseInt(m*n)/2,10);
//     }

// }

// const matrix=[
//     [1,0,15,0],
//     [7,0,0,22],
//     [0,0,0,0],
//     [10,0,0,28]
// ];
// if(sparseMatrix(matrix,4,4)){
//     console.log(true);

// }else{
//     console.log(false);
// }

let MAX =100;
function sparseArray(array,m,n){
    let count=0;
    for(let i=0;i<m;i++){
      
        for(let j=0;j<n;j++){
            if(array[i][j]==0){
                count++;
            }
        }
       
    }
    return (count>parseInt(m*n)/2,10);
}
// const array = [
//     [1,0,0,3],
//     [8,0,0,0],
//     [0,0,0,2],
//     [0,16,0,0]
// ];
const array1 = [
    [1,2,3,4],
    [0,9,0,8],
    [1,5,0,7],
    [0,0,0,9]
]
if(sparseArray(array1,4,4)){
    console.log(true);
}else{
    console.log(false);
}



function sparse(arr,m,n){
    m=arr.length;
    n=arr[0].length
let count = 0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]==0){
                count++
            }
        }
    }
    return (count>parseInt((m*n)/2));
}
let arr = [[0,1,0],
           [3,0,5],
           [9,2,0]]
    console.log(sparse(arr));