

/*for(i=0;i<10;i++){
    console.log(i);
}*/

/*let n=0;
while(n<3){
    n++;
    console.log(n);
    
}*/


/*var sum=0;
for(i=0,j=0;i<10 && j<10;i++,j=i+2){
    console.log(i);
    console.log(j);
    sum+=i;
}
console.log(sum);*/


/*let i=0;
while(i<6){
    if(i===3){
       break; 
    }
    i=i+1;
}*/


/*for(let i=0;i<10;i++){
    if(i===3){
        continue;
    }
    console.log(i);
}*/


// var i,j;
// for(i=1;i<2;i++){
//     for(j=1;j<2;j++){
//         if(i==j);{
//             continue;
//         }
//         console.log(i,j);
//     }
// }


/*function tempAndRaining(temp,isRaining){
 if((temp<=20 && temp>=28)&&isRaining==false) {
        console.log("yay! you can go out to play");
 }else if((temp<=18 && temp>=20)&& isRaining==false){
    console.log("stay inside the play school");
 }else{
    console.log("Go home and stay there");
 }
}

tempAndRaining(25);*/

/*function marks(){
let obtained_marks=46

let result_value = (obtained_marks>=40) ? 'pass' : 'fail' ;////ERROR

console.log('you ${result_value} the exam');
}
marks();*/

/*const checked_number = 5;
let x = 4;
switch(true){
    case(x>0):
    text="The number is Positive";
    break;
    case(x<0):
    text = "The number is Negative";
    break;
    case (x===0):
    text = "the Number is Zero";
    break;
    default:
        text = "No value found";
}
console.log(text);*/


/*let hcf_value;
const first_number=16;
const second_number=8;
for(let iterator=1;iterator<=first_number && iterator<=second_number;iterator++){
    if(first_number%iterator==0 && second_number%iterator==0){
        hcf_value=iterator;
    
    }
}
console.log("hcf of ${first_value} & ${second_value} is {hcf_value}");*/

// function printPalindrome(str){
//     let len = str.length;
//     for(i=0;i<len/2;i++){
//         if(str.charAt(i)!=str.charAt(len-i-1))
//         return false;

//     }
//     return true;
// }
// for(j=1;j<=50;j++){
//     if(printPalindrome(j.toString())){
//         console.log(j);
//     }
// }


// function fibonacciSeries(num){
//     var a=0;
//    var b=1;
//    var c;
//      console.log(a);
//      console.log(b);
//      for(i=2;i<num;i++){
//         c=a+b;
//         if(c<num){
//             console.log(c);
//             a=b;
//             b=c;
//         }
//      }

// }
// fibonacciSeries(10);

// function votingAge(age){
//     if(age>=18){
//         //console.log("you are a voter");
//         return true;
//     }else{
//         //console.log("not a voter");
//         return false;
//     }
// }
// console.log(votingAge(25));

// function checkLargeNUm(a,b,c){
//     if(a>b && a>c){
//         console.log(a+" is Greater");
//     }else if(b>a && b>c){
//         console.log(b+" is Greater");

//     }else{
//         console.log(c+" is Greater");
//     }
// } 

// checkLargeNUm(5,3,1);
// checkLargeNUm(4,9,7);
// checkLargeNUm(1,3,6);


// function gradingSystem(score){

//      if(score>= 95){
//         console.log("Grade A+");
//      }else if(score>=79 && score<=94){
//         console.log("Grade A")

//      }else if(score>=69 && score<=78){
//         console.log("Grade B");
//      }else if(score>=59 && score<=68){
//         console.log("Grade c")
//      }else if(score>=49 && score<=58){
//         console.log("Grade D")
//      }else {
//         console.log("Fail");
//      }

// }
// gradingSystem(65);
// gradingSystem(98);


// function incAndDec(x,y,z){
//     if(x<y && y<z){
//         console.log("Increaseing an order");
//     }else if(x>y && y>z){
//         console.log("Decreasing an order");
//     }else{
//         console.log("neither decreasing nor decreasing");
//     }
// }
// incAndDec(23,45,89);
// incAndDec(98,56,34);
// incAndDec(23,89,45);


//Math.ceil(0.75);
// function minLectures(M,N){

//     let ans=0;
//     if(N<Math.ceil(0.75*M))
//     ans = (Math.ceil(((0.75*M)-n)/0.25));
//     else
//     ans=0;
//     return ans;

// }
// let M=7,N=6;
// console.log(minLectures(M,N));


// function votingAge(n){
//     if(n>=18){
//         return true;
//     }
//     return false;
// }
// console.log(votingAge(20));

// function increasingAndDec(a,b,c){
//     if(a>b && b>c){
//         console.log("Increaseing Order");
//     }else if(a<b && b<c){
//         console.log("Decreasing Order");
//     }else{
//         console.log("Neither decreasing nor increasing");
//     }

// }
// increasingAndDec(13,45,87);
// increasingAndDec(98,65,32);
// increasingAndDec(98,23,56);


// function largeNum(a,b,c){
//     if(a>b && a>c){
//         console.log(a+" is largest");
//     }else if(b>a && b>c){
//         console.log(b+" is largest");
//     }else{
//         console.log(c+" is largest");
//     }
// }
// largeNum(25,15,20);
// largeNum(13,45,12);
// largeNum(45,67,89);









// function sumTillN(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }
// sumTillN(10);
// sumTillN(5);
// sumTillN(20);


// function printTable(n){
//     for(let i=1;i<=10;i++){
//         console.log(i*n);
//     }
// }
// printTable(3);

// function isEvenOROdd(a,b,c){
 
//         // if(num%2==0){
//         //     console.log("even");
//         // }else{
//         //     console.log("Odd");
//         // }

//    // return (num%2==0) ? console.log("Even") : console.log("Odd") ;
//     return a>b && a>c ? console.log( a+" is Largest") : b>a && b>c ?  console.log(b+" is Largest") : console.log("c is Largest");
//     }
// isEvenOROdd(12,8,5);
// isEvenOROdd(14,45,15);
// isEvenOROdd(13,43,56);


// function reverseString(str){
//     let j="";
//     for(let i=str.length-1;i>=0;i--){
//         j+=str[i];
//     }
//     console.log(j);
// }
// reverseString("Hello");

// var arrayOfNumbers = [10,20,30,40,50,60];
// console.log(arrayOfNumbers[0]+arrayOfNumbers[4]);


// function sumOfInnerDigits(num){
//     let numStr=num.toString();
//     if(numStr.length<3){
//         console.log(-1)
//         return ;
//     }
//     let sum = 0;
//     for(let i=1;i<=numStr.length-2;i++){
//         sum =sum+Number(numStr[i]);
//     }
//     console.log(sum);
// }
// sumOfInnerDigits(212323);
// sumOfInnerDigits(90);

// function getPower(num,pow){
//     let i=1;
//     let result=1;
//     while(i<=pow){
//         result=result*num;
//         i++;
//     }
//     console.log(result);
// }
// getPower(10, 2);
// getPower(2,5);
// getPower(4,3);


// function fibonacciSeries(n){
//     if(n<0) return -1;
//     if(n==1) return 0;
//     if(n==2) return 1;

//     let i=2;
//     let series=[0,1];
//     while(i<=n-1){
//         let newNum=series[i-1]+series[i-2];
//         series.push(newNum);
//         i++;
//     }
//     console.log(series[i-1]);
// }
// fibonacciSeries(6);


// function isPrime(n){
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             return false;

//         }
//         return true;
//     }
// }
// function find2PNum(a){
//     for(i=2;(i<a-2 || a<5);i++){
//         if(isPrime(i) && isPrime(a-i));
//         console.log(i, a-i);
//         break;

//     }
   
// }
// find2PNum(15);
// find2PNum(9);
// find2PNum(4);


// class Environmentalist{

//     constructor(name,location){
//         this.name=name;
//         this.location=location;

//     }
//     surveyArea(){
//         console.log("Area Sueveyed");
//         return 100;

//     }
//     showAlert(){
//         console.log("Plant more trees");

//     }
//     plantTrees(){
//         console.log("10 trees");
//     }
// }

// const obj = new Environmentalist("nag","Perali");
// console.log(typeof obj);
// console.log(obj instanceof Environmentalist);

// function canArrayBeSorted(sorted){
//     if(array.length==1){
//         return true;
//     }

//     let startIndex;
//     for(let i=0;i<=array.length;i++){
//         if(array[i]>array[i+1]){
//             startIndex=i;
//             break;
//         }
//     }
//     let endIndex;
//     for(i=startIndex;i<=array.length;i++){
//         if(array[i]<array[i+1]){
//             endIndex=i;
//             break;
//         }
//     }
//      let decreasingArray=[];
//     let j=0;
//     for(let i=startIndex;i<=endIndex;i++){
//         decreasingArray[j]=array[i];
//         j++;
//     }
//     for(let i=decreasingArray.length-1;i>=0;i--){
//         array[startIndex]=decreasingArray[i];
//         startIndex++;
//     }
//     console.log("Main array after reverse: ",array);
//     for(let i0;i<array.length-1;i++){
//         if(array[i]>array[i+1]){
//             console.log(false);
//             return;
//         }
//     }
//     console.log(true);

// }
// canArrayBeSorted([1,2,3,4,5,6]);

// function findSingleDigitSum(num){
//     let numStr = num.toString()
//     if(numStr.length==1){
//         return numStr;
//     }
//     let sum =0 ;
//     for(let i=0;i<numStr.length;i++){
//         sum +=Number(numStr[i]);
      
//     }
//     if(sum>9){
//         findSingleDigitSum(sum);
//     }else{
//     console.log(sum);
//     }
// }
// findSingleDigitSum(12345);


// let rainForestAcres = 10;

// let animals = 0;


// while (rainForestAcres < 13 || animals <= 2) {

//  rainForestAcres++;

//  animals += 2;

// }


// console.log(animals);


// var a=["dog","cat","hen"];
// a[2] = "fox";
// console.log(a.length);


// function findSumOFMatrix(matrix){
//     let lowerTrianglesum=0;
//     let upperTriangleSum=0;
    
//     for(let i=0; i<matrix.length; i++){

//         for(let j=0; j<=i; j++){
//             lowerTrianglesum+=matrix[i][j];
//         }
    
//         for(let j=i; j<matrix[i].length; j++){
//             upperTriangleSum+= matrix[i][j];  
//     }
// }
//     console.log(lowerTrianglesum);
//     console.log(upperTriangleSum);
// }
// const matrix= [
//     [3,4,5],
//      [3,4,2], 
//      [2,3,4],
//     ];
//       findSumOFMatrix(matrix);


// function secondSmallest(array){


//     smallest1 = array[0];
//     smallest2 = array[1];
// for(let i=0;i<array.length;i++){

//     if(smallest1 > array[0]){
//         smallest1 = array[0];
//     }


// }
// for(let i=0;i<array.length;i++){

//     if( smallest1 == smallest2){
//         smallest2 = array[i];
//     }
// }

// // console.log("First Smallest number is ",smallest1);






// for(let i=0;i<array.length;i++){

//     if(i == array.indexOf(smallest1)){
//         continue;
//     }
//     if(smallest2 > array[i]){
//         smallest2 = array[i];
//     }

// }

// console.log("Second Smallest number is ",smallest2);


// }

// secondSmallest([1,2,3,4,9]);

// var arr = [111,13,25,9,34,1];
// let n=arr.length;
// arr.sort();
// console.log(arr);
// var arr=[1,13,25,9,111,34]
// arr.sort();
// console.log(arr);
// arr.sort();
//console.log(n);
//console.log(arr[0]);
//console.log(arr[1]);

// const isEqual = function(obj1,obj2){

//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     return keys1.length == keys2.length && keys2.filter((key)=>obj1[key]==obj2[key]);

// }

// const isEqualValue = function(obj1,obj2){

//     const values1 = Object.values(obj1);
//     const values2 = Object.values(obj2);

//     return values1.length == values2.length && values1.every((v,i)=>v==values2[i]);
// }


// var student = {
//     "fname":"nagendram",
//     "lname":"mankena"
// };
// var student_copy = {
//     "fname":"nagendram",
//     "lname":"mankena"
// };

// console.log(isEqual(student,student_copy));
// console.log(isEqualValue(student,student_copy));

// let lcm = (n1,n2)=>{
//     let lar = Math.max(n1,n2)
//     let small = Math.min(n1,n2)

//     let i=lar;
//     while(i%small!==0){
//         i+=lar;
//     }
//     return i;

// }
// console.log(lcm(5,7));


// const calculateLCM = (...arr) => {
//     const gcd2 = (a, b) => {
//        // Greatest common divisor of 2 integers
//        if(!b) return b===0 ? a : NaN;
//           return gcd2(b, a%b);
//     };
//     const lcm2 = (a, b) => {
//        // Least common multiple of 2 integers
//        return a * b / gcd2(a, b);
//     }
//     // Least common multiple of a list of integers
//     let n = 1;
//     for(let i = 0; i < arr.length; ++i){
//        n = lcm2(arr[i], n);
//     }
//     return n;
//  };
//  console.log(calculateLCM(12, 18, 7, 15, 20, 24, 28));


// const array = ["mumbai","andhra","kerala","london","india"];
// const num = [1,2,3,4,6,7];
// for(let i=0;i<array.length;i++){
    
//     console.log(array[i]);
// }
// for(let j=0;j<num.length;j++){
//     console.log(num[j]);
// }

// var stringArray = ["one","two","three","four"];
// var numericArray =[1,2,3,4];
// console.log(numericArray[1]+numericArray[2]);
// console.log(stringArray.indexOf("three"));
// var numericArray = new Array([3,4,5,6]);
// console.log(numericArray);
// var numericArray = new Array("cat","dog");
// console.log(numericArray);

// var sinDArray = ["h","e","l","l","o"];
// console.log(sinDArray[0]+sinDArray[1]+sinDArray[2]+sinDArray[3]+sinDArray[4])
// console.log(sinDArray[1]);
// console.log(sinDArray[2]);
// console.log(sinDArray[3]);
// console.log(sinDArray[4])

// var items = [
//     [2,3,5],
//     [4,5,8],
//     [6,7,9]
// ];
// console.log(items[0][0])
// console.log(items[1][1]);
// console.log(items[2][1])
// //console.log(items);
// for(var val of items){
// console.log(val);
// }

// const obj = [10,20,30];
// for(const val of obj){
//     console.log(val);
// }

// const laptop = {
//     make:"India",
//     model:"Alienware",
//     memory:["SSD","HDD"],
//     cores:8,
//     memorySize:[256,512],
//     getModel:function(){
//         return this.make;
//     }

// };
// const laptopObj = Object.create(laptop)
// console.log("laptopSpecifications:")
// console.log(laptop);
// console.log(laptop.getModel())
// console.log(laptop.memory[0]);


// const userData = {
//     name:"Ravi",
//     email:"nagendramcse46@gmail.com",
//     age:32,
//     dob:"20/06/1989",
//     active:true
// }


// for(const key in userData){
//     console.log(`${key}:${userData[key]}`)
// };

// const nameforcourse = {
//     java:15,
//     javascript:78,
//     nodejs:38,
//     php:96,
// };
// const keys = Object.keys(nameforcourse);
// console.log(keys);
// keys.forEach((key)=>{
//     console.log(`${key}:${nameforcourse[key]}`)
// });
// const entries = Object.entries(nameforcourse);
// console.log(entries);
//  //const values = Object.values(nameforcourse);
// // console.log(values);
// Object.values(nameforcourse).forEach((val)=>console.log(val));


// const laptop = {
//     name:"dell",
//     model:"Alienware",
//     cores:8,
//     memorysize:[256,512]

// };
// const lapObj = Object.assign({},laptop);
// console.log(lapObj);


// const platForm = {
  
//     name:"relevel",
//     website:"www.relevel.com",
    
//     interactWith:"slack",


// }



// platForm.educator = "Dheeraj";
// platForm.mentor = "Ankitha gupta";
// console.log(Object.isSealed(platForm));
// Object.seal(platForm);
// platForm.ta = "gurpreet";
// console.log(platForm)
// Object.freeze(platForm)
// platForm.name = "unacademy";
// console.log(Object.isSealed(platForm));

// const singles = ["pen","book","pencil"];
// const plurals = singles.map((n)=>n+"s");
// console.log(plurals);
// const div = [" "," " ," " ,];
// const output = div.map((num)=>num+10);
// console.log(output);

// const item = [100,23,490,57,34,63,26,39];
// //const itemcost = item.filter(price=>price>=50);
// const itemcost1 = item.filter(price=>price>=70)
// console.log(itemcost1);
// //console.log(itemcost);

// const city = [
//     {name:"londone",population:"500000"},
//     {name:"swidzerland",population:"1000000"},
//     {name:"shangai",population:"1230000"},
//     {name:"austrlia",population:"302004000"},
//     {name:"india",population:"123000000"}
// ];
// const cities = city.filter((num)=>num.population<=5000000);
// console.log(cities);

// var num = [1,2,3,5,9];
// num.forEach(val=>console.log(val));
// var sum = num.reduce((curr,prev)=>curr+prev)/num.length;
// console.log(sum);

// const array = [12,43,11,13,56,92,48,52];
// array.sort((a,b)=>a-b)
// console.log(array);
// array.sort((a,b)=>b-a)
// console.log(array);
// const reverseArray = array.reverse();
// console.log(reverseArray);


// const string = ["12345","relevel"];
// const splitString = string.split("");
// console.log(splitString)

// const animals = ["lion","Tiger","zerafee","duck","camel"];
// const newarray = animals.slice(2,3);
// console.log(newarray);

// function findMinandMax(arr){

//     let min = Number.MAX_VALUE;
//     let max = Number.MIN_VALUE;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//         if(arr[i]>max){
//             max=arr[i];
//         }
        
//     }
//     console.log("MIN: "+min);
//     console.log("MAX: "+max);
   
// }
// findMinandMax([1,32,5,23,6,7,100,0,134,54,6,6576]);


// function findmaxprofitstock(arr){

//     let maxprofit=0;
//     let sellingprice = 0;
//     let buyingprice = 0;
//     let changebuyingprice = true;

//     for(let i=0;i<arr.length-1;i++){
//         sellingprice = arr[i+1];
//         if(changebuyingprice){
//             buyingprice=arr[i];
//         }
//         if(sellingprice<buyingprice){
//             changebuyingprice = true;
//             continue;
//         }else{
//             let profit = sellingprice-buyingprice;
//             if(profit>maxprofit){
//                 maxprofit=profit;
//             }
//         }
//     }
//     console.log(maxprofit);
// }
// findmaxprofitstock([123,234,256,345,567,50,689,788]);
// findmaxprofitstock([100,180,260,310,40,535,695]);


// function reverseArray(arr){
//     let result = [];
//     let j=0;
//     for(let i=arr.length-1;i>=0;i--){
//         result[j]=arr[i];
//         j++;
//     }
//     console.log(result);
// }
// reverseArray([1,2,3,4,5,6,7,8,9,10]);

// function rearrangeing(arr, size){

//     let mid=0;
//     let end = size-1;
//     let swap = 0;
//     while(mid<=end){
//         if(arr[mid]==0){
//             mid++

//         }else{
//             swap = arr[mid];
//             arr[mid]=arr[end];
//             arr[end]=swap;
//             end--;
//         }
//     }
//     return arr;
// }
// var arr = [1,0,1,0,1,0,1,0,1,1,0,0,0,];
// var size = arr.length;
// console.log(rearrangeing(arr,size);


// function reverseArray(array){
//     if(array.length==1){
//         return true;
//     }
//     let startIndex;
//     for(let i=0;i<=array.length;i++){
//         if(array[i]>array[i+1]){
//             startIndex = i;
//             break;
//         }
//     }
//     let endIndex;
//     for(let i=startIndex;i<array.length;i++){
//         if(array[i]<array[i+1] || i==array.length-1){
//             endIndex=i;
//             break;

//         }
//     }
//     let decreasingArray = [];
//     let j=0;
//     for(let i=startIndex;i<=endIndex;i++){
//         decreasingArray[j]=array[i];
//         j++;
//     }
//     for(let i=decreasingArray.length-1;i>=0;i--){
//         array[startIndex]=decreasingArray[i];
//         startIndex++;
//     }
//     console.log("Main array after reverse: ",array);
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]>array[i+1]){
//             //console.log(false);
//             reverseArray(array);
//             return;
//         }   
//      }
//      console.log(true);
// }
// reverseArray([1,2,5,4,3]);
// reverseArray([1,2,3,7,6,5,8,9,12,11,10])


// function printPrimeNum(n){
//     for(let i=2;i<=n;i++){
//         let isPrime = true;
//         for(let j=2;j<=i-1;j++){
//             if(i%j==0){
//                 isPrime =false;
//                 break
//             }
//         }
//         if(isPrime){
//             console.log(i);
//         }
//     }
// }
// printPrimeNum(100);

// function findSingleDigitSum(num){
//     let numStr = num.toString();
//     if(numStr.length==1){
//         return true;
//     }
//     let sum=0;
//     for(let i=0;i<numStr.length;i++){
//         sum +=Number(numStr[i]);
//     }
    
//     if(sum>9){
//         findSingleDigitSum(sum);

//     }else{
//         console.log(sum);
//     }
// }
// findSingleDigitSum(1234456);

// function reversePyramid(n){

//     for(let i=1;i<=n;i++){
//         let patt = "";
//         for(let j=1;j<=i;j++){
//              patt +=" "; 
//          }
//          for(let k=i;k<n;k++){
//             patt +=k+" ";
//          }
//         console.log(patt);
//     }
// }
// reversePyramid(9);

// console.log(typeof NaN);
// console.log(NaN == NaN);

// function sparcematrix(matrix){


//     let startrow=0;
//     let startcol=0;
//     let endrow=matrix.length-1;
//     let endcol = matrix[0].length-1;
//     while(startrow<endrow && startcol<endcol){
//     for(let i=startcol;i<=endcol;i++){
//         console.log(matrix[startrow][i]);
//     }
//     startrow = startrow+1;
//     for(let i=startrow;i<=endrow;i++){
//         console.log(matrix[i][endcol])
//     }
//     endcol=endcol-1;
//     for(let i=endcol;i>=startcol;i--){
//         console.log(matrix[endrow][i]);
//     }
//     endrow = endrow-1;
//     for(let i=endrow;i>=startrow;i--){
//         console.log(matrix[i][startcol])
//     }
//     startcol = startcol+1;
// }

// }
// const matrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];
// sparcematrix(matrix);


// const transpose = arr=>{
//     for(let i=0;i<arr.length;i++){
//        for(let j=0;j<i;j++){
//           const temp = arr[i][j];
//           arr[i][j] =arr[j][i];
//           arr[j][i] = temp;
//        }
//     }
//   }
//   const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ];
//   transpose(arr);
//   console.log(arr);


// function waveform(matrix){
//     let collength = matrix[0].length;

//     for(let i=0;i<collength;i++){
//         if(i%2==0){
//             for(let j=0;j<matrix.length;j++){
//                 console.log(matrix[j][i])
//             }
//         }else{
//             for(let k=matrix.length-1;k>=0;k--){
//                 console.log(matrix[k][i])
//             }
//         }
//     }
// }
// const matrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];
// waveform(matrix);


// function uptriangleandlowtriangle(matrix){
//     let up_triangle=0;
//     let low_triangle=0;
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//             if(i<=j){
//                 up_triangle += matrix[i][j];
//             }
//         }
//     }
//     console.log(up_triangle);
//     for(let i=0;i<matrix[0].length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//             if(j<=i){
//                 low_triangle += matrix[i][j];
//             }
//         }
//     }
//     console.log(low_triangle);
// }
// const matrix= [
//     [1,2,3],
//     [5,6,7],
//     [7,5,6],
    
// ];
// uptriangleandlowtriangle(matrix);


// var a=[];
// a.unshift(1);
// a.unshift(22);
// a.shift();
// a.shift();
// a.unshift(3,[4,5]);
// a.shift();
// a.shift();
// a.shift();
// console.log(a);

// var values = ["one","two","three"];
// var ans = values.shift();
// console.log(ans);

// var grand_total = eval("10*10+5");
// console.log(grand_total);
// console.log(typeof grand_total);


// var tensquared = (function(x){return x*x} (10));
// console.log(tensquared);



// console.log(parseInt("123Hello"))
// console.log(parseInt("Helle123"));



// var a= true+true+true*3;
// console.log(a);



// function fibb(n){
//     if(n==0 || n==1){
//         return n;
//     }
//     return fibb(n-1)+fibb(n-2);
// }
// console.log(fibb(7));

// function incnum(n){
//     if(n==0){
//         console.log(1);
//         return n;
//     }
//     incnum(n-1);
//     console.log()
// }
// fibb(9);



// var a = Math.max();
// var b = Math.min();
// console.log(a);
// console.log(b);


// var a =[1,2,3,4];
// var ans = a.slice(1);
// console.log(ans);

// var a = true+true+true*3
// console.log(a);

// //  thisfun = fuction lfc(x){
// // console.log(x*x);
// // }
// // thisfun(10);


// function password(pass){
//     for(i=0;i<pass.length;i++){

//     }
// }
// function name(pname){
//     console.log("the value of i is " +i);
//     for(i=0;i<pname.length;i++){

//     }
// }
// password("54321");
// name("john");

// num1 =5;

// function cal(){
//     num1 =10;
//     num2 =5;
//     num3 = num2*num1;
//     console.log(num3);
// }
// cal();



// while(a!=0){
//     if(a===1){
//         continue;
//     }else{
//         a++;
//     }
// }


// function range(length){
//     var a=5;
//     for(let i=0;i<length;i++){
//         console.log(a);
//     }
// }
// range(3);


// var counter = 10
// if(counter<=5){
//     console.log(counter)
//     counter++;
// }
// else{
//     console.log(counter);
//     counter--;
// }

// function gradingSystem(score){
//     if(score>=90){
//         console.log("A");
//     }
//     else if(score>=80 && score<=89){
//         console.log('B');
//     }else if(score>=60 && score<=79){
//         console.log("C");
//     }else if(score>=33 && score<=59){
//         console.log("D")
//     }else{
//         console.log("fail");
//     }
// }
// gradingSystem(98);
// gradingSystem(87);
// gradingSystem(66);
// gradingSystem(45);
// gradingSystem(24);


// function minlectures(m,n){

//     if(m/n*100>=75){
//         console.log("75% attendence is already is achieved");
//     }else{
//         console.log("not achieved");
//     }

// }
// minlectures(7,6);
// minlectures(3,5);



// var a=1;
// var b=5;
// var c=1;

// var result = b*b-4*a*c;

// if(result>0){
//     var r1 = (-b+Math.pow(result,0.5))/(2*a)
//     var r2 = (-b-Math.pow(result,0.5))/(2*a);
//     console.log("the roots are "+ r1 + "and " +r2);

// }else if(result===0){
//     var r1 = -b/(2*a);
//     console.log("the root is " + r1);
// }else{
//     console.log("no real roots.");
// }



// // String s1 = "Hello";
// // String s2 = new String("Hello");
// // console.log(s1==s2);


// function squaresum(num){
//    var a=0;
//    while(a*a<num){
//     var b=0;
//     while(b*b<num){
//         if(a*a+b*b==num){
//             if(a<=b){
//                 console.log(a+","+b)
//             }
//         }
//         b+=1;
//     }
//     a+=1;
//    }
// }
// squaresum(50);
// squaresum(25);
// squaresum(100);
// //str.charAt()
// function checkpalindrome(str){
//     var len=str.length;
//     for(let i=0;i<len/2;i++){
//         if(str[i]!=str[len-i-1]){
//             return false;
//         }
//          return true;
//     }
// }
    
// for(let j=0;j<=100;j++){
//         if(checkpalindrome(j.toString())){
//             console.log(j);
//         }
//     }


// function isRaining(temp,isRaining){
//     if(temp>=20 && temp<=25 && !isRaining){
//         console.log("children to go out inpark");
//     }else if(temp>=18 && temp<=20 && isRaining){
//         console.log("play in school")
        
//     }else{
//         console.log("Go home and stay there");
//     }
// }
// isRaining(22,false);

// function printPass(marks){
//  return marks>=40 ? "pass" : "fali"
// }
// console.log(printPass(50));
// console.log(printPass(30));


// function num(num){
//     switch(num){
//         case 1:(num>=0)
//             console.log("positive");
//             break;
//         case 2:(num<0)
//             console.log("negative")
//             break;
//         case 3:(num===0)
//              console.log("zero");
//             break;
//         default:
//         console.log("unknown")
//     }
   
// }
// num(23);
// num(-76);
// num(0);


// let n = parseInt(readline());
// let arr = [];
// arr = readline().split(" ");

// console.log(countOddNumbers(arr, n));

// function countOddNumbers(arr, n) {
//   let arn = {};
//   for (let i = 0; i < n; i++) {
// 	  console.log(typeof arr[i])
//     if (arr[i] % 2 !== 0 && !Object.keys(arn)) {
//       arn[arr[i]] = 1;
//     } else if (arr[i] % 2 !== 0 && Object.keys(arn)) {
//       arn[arr[i]] = 0;
//     }
//   }
//  return(Object.keys(arn).length);
// }
// const arr = [3,6,9,54,7,19]
// countOddNumbers(arr);
// console.log(arr);


// var a=15;
// var b=25;
// if((a<b) || (a=5)>15)
// console.log(a);
// else
// console.log(b);


// var x,y;
// x=15;y=20;
// if(x>15)

// if(y>15){
//     console.log("y is "+y)
// }else
//     console.log("x is "+x);

// // 



// function num(x,y){
   
//     if(y>15){
//         console.log("y is "+y)
//     }
//     else if(x>15){
//         console.log("x is "+x);
//     }
    
// }
// const x=15,y=20;
// num(15,20);


// var j=0;
// while(j<10){
//     j++;
// }
// if(j==5) continue loop;
// console.log("j is")

// var x=20;
// var y=10;
// if(x>y){
//     if(y>10)
//     console.log("y is "+y);
// }else
// console.log(" x is "+x);

// var j=50;
// while(true)
// {
//     if(j<10)
//     break;
//     j=j-10;
// }
// console.log(" j is "+j);

// var x=5,y=1;
// var obj = {x:10}
// with(obj){
//     alert(y);//1
// }


// for(var num=10;num>=1;num--){//this is an efficient
//     console.log(num);
// }
// var num=10;
// while(num>=1){
//     console.log(num);
//     num++;
// }


// var count = 0;
// while(count<10){
 
//     console.log(count);
//     count++;
// }

// var grade = 'C';
// var result;
// switch(grade)
// {
// case'A':
// {
//     result+="10";
//     break;
// }
// case'B':
// {
//     result+="9";
//     break;
// }
// case 'C':
// {
//     result+="8";
//     break;
// }
//     default:
//         result+="0";
// }
// console.log(result)



// function solve(arr,rotations){
//     if(rotations == 0) return arr;
//     for(let i=0;i<rotations;i++){
//         let element= arr.pop();
//         arr.unshift(element);
//     }
//     return arr;
// }
// console.log(solve([44,1,22,111],5));


//var a= null;
// console.log(typeof Boolean);


// var a = 1;
// var b = 0;
// while(a<=3){
//     a++;
//     b+=a*2;
    
//     console.log(b);
// }


// var a = Math.max()<Math.min();//
// var b = Math.min()<Math.max();
// console.log(a);
// console.log(b);

// console.log(NaN === NaN)//false



// var a = "hello";
// var sum = 0;
// for(var i=0;i<a.length;i++){
//     sum += i;
// }
// console.log(sum);




// const set = new Set();
// set.add(5);
// set.add("hello");
// set.add({name:"scaler"});
// for(let item of set){
//     console.log(item+6);
// }


// const example = ({a,b,c})=>{
//     console.log(a,b,c);

// }
// example(1,2,3);


// let a = [1,2,3,4,5,6];
// var left = 0; right = 5;
// var found = false;
// var target = 5;
// while(left<=right){
//     var mid = Math.floor(left+right)
//     if(a[mid]==target){
//         found = true;
//         break;
//     }else if(a[mid]<target){
//         left = mid+1;
//     }else{
//         right = mid -1;
//     }
// }
// if(found){
//     console.log("yes");
// }
// else{
//     console.log("NO")
// }

// console.log(typeof null);



// const obj1 = {Name: "Hello", Age: 16};
// const obj2 = {Name: "Hello", Age: 16};
// console.log((obj1 == obj2));
// let check = (arr,mid,n,k)=>{
//     let count = 0;
//     let sum =0;
//     for(let i=0;i<n;i++){
//         if(arr[i]>mid){
//             return false;
//         }
//         sum += arr[i];
//         if(sum>mid){
//             count++;
//             sum = arr[i];
//         }
//     }
//    count++;
//    if(count<=k){
//         return true;
//    }
//    return false;
// }
// let solve = (arr,n,k)=>{
//     let max = arr.reduce((a,b)=>Math.max(a,b));
//     let start = max;
//     let end = 0;
//     for(let i=0;i<n;i++){
//         end += arr[i];
//     }
//     let answer = 0,mid;
//     while(start<=end){
//         mid = parseInt(start+end)/2;
//     }
//     if(check(arr,mid,n,k)==true){
//         answer = mid;
//         end = mid-1;
//     }
//     else{
//         start = mid+1;
    //}



   
    //return answer;
// }
// let arr = [1,2,3,4];
// let n=arr.length;
// let k=3;
// console.log(solve(arr,n,k));


