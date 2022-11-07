// understanding clouser

//1.learning sbout scope.
  //1.1 when x will start occupuing memory ?
      //as soon as add function.
  //1.2 How long x will remain in memory ?
      //untill function copletes its xecution.

//2. using inner functions.
    //2.1 there is a difference in creating and invoking a function.
const add = function(){
    var x = 10; //when add is called.
    console.log(x);                                    
    return function add2(){
      //copies x varisble into its own scope.
        var y=20;
        console.log(x+y);//how x is accessible ??
    }
}
const result = add();//x is destroyed.
const result2 = result();//when we call add2 here,how x is accessible?
console.log(result);

const add1 = function(){
    var x =12;
    console.log(x);
    return function add3(){
        var y=13;
      
        console.log(x+y);
    }
}
 const res = add1();
res();
console.log(add1);//[function add1]
console.log(res);//[function add3]



// const add = function(){
//   var x=10;
//   console.log(x);
//   return function add2(){
//     var y=20;
//     console.log(x+y);
//   }
// }

// const result = add();
// const result2 = result();
// console.log(result2);
// result();


