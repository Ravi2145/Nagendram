
//1.
// const object1 = {
//     name:"relevel",
//     age:4,
//     address:{
//         street:'Indira nagar'
//     }
// };
// const frozenObject = Object.freeze(object1);
// frozenObject.name = 'Unacadamy';
// frozenObject.address.street = 'whiteField';
// delete frozenObject.name Object.isFrozen(object1)

// console.log(object1);


//2.
let obj1 = {"name":"john","city":"vetican"}
let printInfo = function(name)
{
    console.log(this.name+this.city)
}
printInfo.bind(obj1,"shaun")()
//ans:johnvetican


//3.consider we need to have an animation delay of 5sec which of the following is a correct syntax

//4.
function myFun(x,y,...manyMoreArgs){
    console.log(manyMoreArgs);
    //console.log(...manyMoreArgs)//3,4,5
}
myFun(1,2,3,4,5);//[3,4,5]
myFun(1,2);//[]



//5.
// int main()
// {
//     print(10?0?5:11:12)
// }
//ans:11

//6.
// int main(){
//     float num = 0.1
//     if(num == 0.1f){
//         print "equal " in new line
//     }else{
//         print "not equal" in new line
//     }

// }
//ans:not equal


//7.what is considered as the terminating character used in strings to notify the end of the string to the compailer.


//8.consider an array of float calculate the difference between the address of the 1st and 4th element,assuming float occupies 4 bytes of memory


//9.Suppose you apply a breadth- first search on a data structure,and you find it has a unique 
// breadth-first search order. which data structure could it possibly be?


//10.How many swaps are needed to sort an array of length 'a' useing selection sort?


//11.In a compact single diamentional array representation for lower triangular matrices
// (i.e all the elements above the diagonal are zero) of size nxn, non-zero elements(i.e elements of the lower triangle)
// ofeach row are stored one after another.Starting from the first row,the index of the (i,j)th elements of the lower triangular 
// matrix in this new representation is?