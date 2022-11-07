

function oneDtoTwoDArray(array){
    let twoD = [];
    for(let i=0;i<array.length;i+=2){
        twoD.push(array.slice(i,i+2));
    }
    console.log(twoD);
}
const array = [1,2,3,4,5,6,7,8,9,10];
oneDtoTwoDArray(array);

