let arr = [35,3,4,88,9,10,21,5,6];
let result = [];
let tempResult = [];

let sortedArr = arr.sort((a,b)=>a-b);

function longestConseSequence(arr){
    tempResult = [arr[0]];

    for(let i = 1;i<arr.length;i++){
        if(arr[i] === arr[i - 1] + 1){
            tempResult.push(arr[i]);
        }else{
            if(tempResult.length>1)result.push(tempResult);
            // result.push(tempResult);
            tempResult = [arr[i]];
        }
    }
    console.log(result);
    console.log(result.sort((a,b)=>b.length-a.length)[0].length);
}
longestConseSequence(arr);