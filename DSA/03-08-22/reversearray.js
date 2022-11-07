//[1,2,3,4,5]
//n->length

function reverseArray(array){
    //create an empty array
  let result=[];
  //create a pointer for empty array so that i can increament
    var j=0;
       for(
        // where to begin.
        let i=array.length-1;
        //where to stop/ how long to go
        i>=0;
        //how to proceed.
        i--){
        //copying from original array into result array.
                result[j] =array[i];
                j++;

       }
       //print result
       console.log(result);
    }
    reverseArray([1,2,3,4,5]);

// const reverseArray=[1,2,3,4,5];
// console.log(reverseArray.unshift())




let reverse = (arr)=>{
  let result = [];
  for(let i=arr.length-1;i>=0;i--){
    result.push(arr[i]);
    //result += arr[i];
  }
  return result;
}
console.log(reverse([6,7,8,9,0]))