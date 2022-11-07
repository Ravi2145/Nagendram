// function printPrimeNum(num){
           
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//          return true;
//     }
// }

//     for(let j=2;j<=7;j++){
//         if(printPrimeNum(j.toString())){
//          console.log(j)
//         }
// }


function findPrintNumbers(n){
     for(let i=2;i<=n;i++){
        let isPrime=true;
        for(let j=2;j<=i-1;j++){
            if(i%j==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
     }
}
findPrintNumbers(100);




