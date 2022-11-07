

let isPowerOfTwoBitWiseOperator = (n)=>{
    if(n<1){
        return false;
    }
    return (n & (n-1))===0;

    // while(n<1){
    //     if(n%2!==0){
    //         return false;
    //     }
    //     n=n/2 TC:O(logn)
    // }
    // return true;
}
console.log(isPowerOfTwoBitWiseOperator(1));
console.log(isPowerOfTwoBitWiseOperator(2));
console.log(isPowerOfTwoBitWiseOperator(16));
console.log(isPowerOfTwoBitWiseOperator(10));
//O(n)