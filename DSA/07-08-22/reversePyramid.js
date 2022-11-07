function reversePyramid(num){
    for(let i=1;i<=num;i++){
        let revpy = "";
        //1. print initial space
        for(let j=1;j<=i;j++){
         revpy +=" ";
        }
        //2. print nums
        for(let k=i;k<num;k++){
            revpy +=k+" ";
           //revpy +=j.toString();
        }
        
        console.log(revpy);
    }
   
}
reversePyramid(9);







