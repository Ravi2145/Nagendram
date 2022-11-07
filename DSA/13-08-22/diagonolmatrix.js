


function diagonolMatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            if(i!=j && matrix[i][j]!=0){
                return false;
            }
        }
    }
    return true;


}
const matrix = [
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
];
const matrix2 = [
    [1,0,3,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
];
const matrix3 = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
console.log(diagonolMatrix(matrix));
console.log(diagonolMatrix(matrix2));
console.log(diagonolMatrix(matrix3));




function diagonolMatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(i!=j && matrix[i][j]!=0){
                return false
            }
        }
    }
    return true;

}
const matrix1 = [
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
];
const matrix21 = [
    [1,0,3,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
];
const matrix31 = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
console.log(diagonolMatrix(matrix1));
console.log(diagonolMatrix(matrix21));
console.log(diagonolMatrix(matrix31));