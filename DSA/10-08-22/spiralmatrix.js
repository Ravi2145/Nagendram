//print spiral matrix

function printSpiralMatrix(matrix){

    let startrow=0;
    let startcol =0;
    let endrow = matrix.length-1;
    let endcol = matrix[0].length-1;

    while(startrow<endrow && startcol<endcol){
        
    //1. 1st loop from 1st row 1st column to 1st row last col.
    for(let i=startcol;i<=endcol;i++){
        console.log(matrix[startrow][i]);

    }
    //2. 2nd loop from 2ndrow last column to last row last column
    startrow=startrow+1;
    for(let i=startrow;i<=endrow;i++){
        console.log(matrix[i][endcol])
    }
    endcol = endcol-1;
    for(let i=endcol;i>=startcol;i--){
        console.log(matrix[endrow][i]);

    }
    endrow = endrow-1
    for(let i=endrow;i>=startrow;i--){
        console.log(matrix[i][startcol])
    }
    startcol =startcol+1
}
}
const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
printSpiralMatrix(matrix);




