function sumOfEachcolumn(matrix){
    let result = [];
    for(let i=0;i<matrix.length;i++){
        let sum = 0;
        for(j=0;j<matrix[0].length;j++){
            sum+=matrix[j][i];
        }
        result.push(sum)
    }
    console.log(result);
}
let mat= [[5,10,15],
          [10,20,10],
          [15,10,5]]
sumOfEachcolumn(mat);

function sumOfEachcolumnandrow(matrix){
     
    const result = [];
    const result1 = [];

    for(let i=0;i<matrix.length;i++){
        let csum = 0;
        let rsum = 0;
        for(let j=0;j<matrix[0].length;j++){
            csum+=matrix[j][i];
            rsum+=matrix[i][j];
        }
        result.push(csum);
        result1.push(rsum);
    }
    console.log(result);
    console.log(result1)

}
const matrix = [
    [3,4,5,12],
    [3,4,7,8],
    [2,3,4,21],
    [4,4,10,9]
];
sumOfEachcolumnandrow(matrix);










