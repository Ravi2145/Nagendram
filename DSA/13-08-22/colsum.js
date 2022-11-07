

let m=4,n=3;
const A=[
    [3,4,5],
    [3,4,2],
    [2,3,4],
    [4,4,4]
];
var col_sum = A.reduce((A,B)=>A.map((x,idx)=>x+B[idx]));
console.log(col_sum);




