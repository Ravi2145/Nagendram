// var arr = [1,2,3,4,5]

// arr.forEach(x=>{console.log((x))});
// arr.reverse().forEach(x=>{console.log(x)})

// for(let i=arr.length;i>0;i--){
//     console.log(i);
// }


var arr2d = [[1,2,3],
             [4,5,6],
             [7,8,9]]
for(let i=0;i<arr2d.length;i++){
    for(let j=0;j<arr2d[0].length;j++){
        console.log([arr2d[i][j]]);
        // console.log([arr2d[j][i]]);
    }
}
var A = [[1,2,3],
         [4,5,6],
         [7,8,9]];
for(let i=A.length-1;i>=0;i--){
    for(let j=A[0].length-1;j>=0;j--){
        // console.log([A[j][i]]);
        console.log([A[i][j]]);
    }
}
var B = [[1,2,3],
         [4,5,6],
         [7,8,9]];
for(let i=B.length-1;i>=0;i--){
    for(let j=0;j<B[0].length;j++){
        // console.log([A[j][i]]);
        console.log([A[i][j]]);
    }
}
var c = [[1,2,3],
         [4,5,6],
         [7,8,9]];
for(let i=0;i<c.length;i++){
    for(let j=c[0].length-1;j>=0;j--){
        // console.log([A[j][i]]);
        console.log([A[i][j]]);
    }
}

