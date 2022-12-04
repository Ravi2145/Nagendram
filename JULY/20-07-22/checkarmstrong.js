let checkarmstrongornot = (num,res)=>{
    let temp = num;
    while(temp>0){
     let rem = temp%10;
        res += rem*rem*rem;
        temp = parseInt(temp/10);
        console.log(rem+ " " +res+" "+temp)
    }
    if(num==res){
        console.log("Armstrong Number");
    }
    else{
        console.log("Not an Armstrong number");
    }
    
}
checkarmstrongornot(153,0);
checkarmstrongornot(123.0);



