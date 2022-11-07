// const array = [1,2,3,4,5] ;
// console.log(array.reduce((curr,prev)=>curr+prev));
//999999999999
//108
//9
// function findSingleDigitSum(num){
//     //1.convert number to string.
//     //=>because you can'tfind length/traverse
//    const numStr = num.toString();
//    if(numStr.length==1){
//     return numStr;
//    }
//    //2. sum all digits of the number.
//    let sum=0;
//      for(let i=0;i<numStr.length;i++){
//         sum+=Number(numStr[i]);
    
//     }
//     if(sum>9){
//         findSingleDigitSum(sum);
//     }else{
//     console.log(sum);
//     }
// }
// findSingleDigitSum(12345);

function findSingleDigitSum(num){
    let numStr=num.toString()
    if(numStr.length==1){
        return numStr
    }
    let sum=0;
    for(let i=0;i<numStr.length;i++){
        sum+=Number(numStr[i])
    }
    if(sum>9){
        findSingleDigitSum(sum);
    }else{
        console.log(sum);
    }
}
findSingleDigitSum(12345);


// const num = "1234";
// console.log()




