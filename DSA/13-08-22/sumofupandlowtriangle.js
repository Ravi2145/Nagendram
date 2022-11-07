// function findSumofTriangles(matrix){
//     let uppertriangle = 0;
//     let lowertriangle = 0;
//     for(let i=0;i<matrix.length;i++){

//     }
// }

function sumofUpandLowTriangle(mat,r,c){

    let upper_sum=0;
    let lower_sum=0;
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(i<=j){
                upper_sum+=mat[i][j];
            }
        }
       
    }
    console.log("Upper sum is: "+upper_sum);
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(j<=i){
                lower_sum+=mat[i][j];
            }
        }
    }
    console.log("Lower sum is: "+lower_sum);

}
const mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
sumofUpandLowTriangle(mat,3,3)




