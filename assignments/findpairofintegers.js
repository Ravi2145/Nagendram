// function squarSum(num){
//     a=0;
//     while(a*a<=num){
//         b=0;
//         while(b*b<=num){
//             if(a*a+b*b==num){
//                 if(a<=b){
//                     console.log(a+","+b);
//                 }
//             }
//             b+= 1
//         }
//         a +=1;
//     }
// }
// squarSum(50);

function squarSum(num){
    a=0;
    while(a*a<=num){
        b=0;
        while(b*b<=num){
            if(a*a+b*b==num){
                if(a<=b){
                    console.log(a+" "+b)
                }
            }
            b +=1;
        }
        a +=1;
    }
}

squarSum(50);




// function power(a,n){
//     let num = 0;
//     if(a==1) return 0;
//     while(n>0){
//         num++;
//         n/=a;
//     }
//     return num;

// }
// function findPairOfIntegers(n,a,b){
//     let powa, powb;
//     powa = power(a,n);
//     powb = power(b,n);
//     let letialb= b, letiala = a;
//         a=1;
//     for(let i=0;i<=powa;i++){
//             b=1;
//         for(let j=0;j<=powb;j++){
//             if(b==n-a)
//             {
//                 console.log(i+ " " +j);
//                 return;
//             }
//             b*=letialb;
//         }
//         a*=letiala;
//     }
//     console.log("-1");
//     return;
// }
// findPairOfIntegers(50,5,5);
// findPairOfIntegers(50,7,1);

