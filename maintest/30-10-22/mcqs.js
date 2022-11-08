//1.
// For a program accessing X[i][j][k], the following intermediate code is generated by a compiler. 
// Assume that the size of an integer is 32 bits and the size of a character is 8 bits. Which one of 
// the following statements about the source code for the program is CORRECT?

// Options

// X is declared as 'int X[32][32][8]'//Ans:A


// X is declared as 'int X[4][1024][32]'


// X is declared as 'char X[4][32][8]'


// X is declared as 'char X[32][16][2]'


//2.
// Which of the following are the errors that are displayed instantly during the program execution?
// Options

// Logical errors

// Runtime errors//ans:B

// Syntax errors

// Linker error



//3.
function fun1(){
    let y=z=0;
    y++;
    return y;
}
fun1()
console.log(typeof y);
console.log(typeof z);
//ans:undefined number


//4.
function Demo(str1){
    return str1.split(/\s+/).slice(0,5).join(" ");
    // console.log(str1);
}
var str2 = "We should always be helpfull to others";
var str3 = Demo(str2);
console.log(str3);


//5.
var demo = {"val_1":"4","val_2":"5","val_3":"6"}
for(var item in demo){
    console.log(demo[item]);
}


//6.
function sample(data){
    if(data==={x:10}){
        console.log("yes");
    }
    else if(data=={x:20}){
        console.log("no");
    }else{
        console.log("Good,job");
    }
}
sample({x:15});
sample({x:25});


//7.
// @media only screen and (max-width: 820px){
//     class*="col-";
//     {
//         width:80%;
//     }
// }


//8.
console.log(1=="1");
console.log(1==[1]);
console.log(1==true);


//9.
var array1 = [1,2,3];
var array2 = [3,4,5];
array2.push(...array1);
console.log(array1);
console.log(array2);
//Ans:[1,2,3][3,4,5,1,2,3]


//10.
console.log(Object.is('false','true'));//false
console.log(Object.is(null,null));//true
const val1 = {b:4};
const val2 = {b:4};
console.log(Object.is(val1,val1));//true
console.log(Object.is(val1,val2));//false


//11.which of the correct statement for inserting a table within another table
//ans:Yes, table can be inserted into cell of another table.


//12.
var a=2;
var b = ++a + a;
console.log(b);


//13.
// void foo(int n,int sum){
//     int k=0,j=0;
//     if(n==0) return;
//     k=n%10;
//     j=n/10;
//     sum=sum+k;
//     foo(j,sum)
//     print(k);
// }
// int main()
//  {
//     int a = 2048,sum = 0;
//     foo(a,sum)
//     print(sum);
// }
//ans:20480


//17.
// which of the following statements are correct corresponding control structure


//18.
// are the statements true or false?(i)'float' hashigher precision than 'double'.f
// (ii)we can initialize a variable in the same line we declare it.


//19.
let x= 3;
for(x=3;x==3;x--){
    console.log(x);//3
}

//20.
var h=8;
var f=(h>6||h<10)?++h:h+7;
console.log(f);//9


//21.
// Suppose it has its representation with a head pointer only. 
// Given the representation, which of the following operations can be 
// implemented in O(1) time ?
// 1) insertion at the front of the linked list. 
// 2) insertion at the end of the linked list 
// 3) Deletion of the front node of the linked list 
// 4)Deletion of the end node of the linked list
//ans:1&3


//22.
// if in-order and post-order traversal of a binary tree are 1,2,3,4,5 and 
// 1,3,5,4,2, then preorder traversal would be?

//23.
// which of the following is true for computation time in insertion,
// deletion and finding maximum and minimum element in a sorted array ?

//24.
// suppose you only have knowledge abut the stack data structure .Now you want to implement a 
//  queue using that . How many stacks would be required?
//ans:2


//25.
// Consier sorted array 1,3,4,7,8,9. which sorting algorithm would be best to insert 
// the number 5 into the array?
//ans:Insertion


//26.
//match the following 
// list-1
// A.Ready->Block B.Run->Block C.Ready->Suspend ready D.Run->Ready 
// List-2
// 1.when a processor requests I/O request 
// 2.When a process with higher priority has to be executed but the main memory is full . 
// 3.When time quantum expires . 
// 4.Not possible 