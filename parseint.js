// for (let i = 0; i <= 100; i++) {
//     let a = i % 10;  // or use  parseInt(i / 10);
//     if (i < 10) {
//       console.log(i);
//     } else if (i / a == 11) {
//       console.log(i);
//     }
//   }


let arr = [1,2,3,4,5];
let n=arr.length-1;
for(let i=0;i<n;i++){
    arr[i]=arr[i]+arr[i+1];
}
console.log(arr);


var a=5
var b=0==2 && a++
console.log(a,b);//5 false


// for(i==1;i<=3;i++){
//     console.log("Hello")//error
// }