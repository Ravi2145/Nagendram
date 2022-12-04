const reverseInteger = (x)=>{
    if(x<0) return -1*reverse(-x)
    const sol = (x+"").split('').reverse().join('');
    return (sol>2**31-1) ? 0 : sol;
}
console.log(reverseInteger(123));

