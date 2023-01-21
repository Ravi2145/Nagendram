//1.predict the output of the followig js code snippet:
function sample(data){
    if(data==={x:10}){
        console.log("yes");
    }
    else if(data == {x:20}){
        console.log("no");
    }
    else{
        console.log("Good,job");
    }
}
sample({x:15});
sample({x:25});

console.log(NaN===NaN);
console.log(typeof NaN)


var a=3;
var res = a++ + ++a + a++ + ++a

console.log(res);
