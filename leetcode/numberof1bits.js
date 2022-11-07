 let numberOf1Bits = (n)=>{
    let result = 0;
    while(n!=0){
        result+=1;
        n = n&(n-1);
    }
    return result;
 }
 console.log(numberOf1Bits(111101));