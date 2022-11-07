//step 1:Find Descreaseing array
    //find start by decreasing point in array
    //find end by end of array or start of next increasing subarray
//step 2:Reverse Decreasing array and put in original array
//step 3:check if array is sorted or not.

function canArrayBeSorted(array){
   if(array.length==1){
    return true;
   }
   // step 1:find decreasing array
   let startIndex;
        //1.1 find start index
    for(let i=0;i<=array.length;i++){
        
        if(array[i]>array[i+1]){
            startIndex = i;
            break;
        }
        
    }
    //1.2 find end index
    let endIndex;
    for(let i=startIndex;i<array.length;i++){
        if(array[i]<array[i+1] || i==array.length-1){
            endIndex=i;
            break;
        }
    }
    //1.3 create decreasing array

    let decreasingArray=[];
    let j=0;
    for(let i=startIndex;i<=endIndex;i++){
        decreasingArray[j]=array[i];
        j++;
    }
    console.log("Decreasing Array: ", decreasingArray)
   
   //step 2:Reversing subarray and put values into main array.
    //[5,4,3]
    for(let i=decreasingArray.length-1; i>=0;i--){
        array[startIndex]=decreasingArray[i];
        startIndex++;
    } 
    console.log("Main Array after reverse: ",array);

    //step 3:check if sorted or not.
    for(let i=0;i<array.length-1;i++){
        if(array[i]>array[i+1]){
            console.log(false);
           // recursive call=> calling same function from inside inside the body.
            //
            //canArrayBeSorted(array);
            return;
        }
    }
    console.log(true);
}
canArrayBeSorted([1,2,5,4,3,7])//true
//canArrayBeSorted([1,2,5,4,3,7,8,9,12,11,10,13,14,17,16,15]);
//canArrayBeSorted([1,2,4,5,3])//false




function canArrayBeSorted1(arr){
    if(arr.length==1){
        return true;
    }
    let stIdx;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>arr[i+1]){
            stIdx=i
        break;
        }
    }
    let endIdx;
    for(let i=stIdx;i<arr.length;i++){
        if(arr[i]<arr[i+1] || i==arr.length-1){
            endIdx=i
            break;
        }
    }
    let decArr = [];
    let j=0;
    for(let i=stIdx;i<=endIdx;i++){
        decArr[j] = arr[i];
        j++
    }
    for(let i=decArr.length-1;i>=0;i--){
        arr[stIdx]=decArr[i];
        stIdx++;
    }
   console.log("main array afetr reversing ",arr)
}
let arr = [1,2,3,7,6,5,4]
console.log(canArrayBeSorted1(arr));