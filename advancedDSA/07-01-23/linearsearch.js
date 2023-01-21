// let arr = [3,5,1,8,10]
// let find = 5
// function linearsearch(arr,find){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === find){
//             console.log("we found", find , "at loation ", i)
//             return;
//         }
//     }
// }


// binary-search
// pre-condition: array should be sorted
let arr = [3, 5, 1, 8, 10];
let find = 9;
// log n
function linearSearch(arr, find) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            console.log("We found ", find, " at location ", i);
            return;
        }
    }
}
linearSearch(arr, find);
// log n
function linearSearchRecurse(i, arr, find) {
    // peak condition
    if (arr[i] === find) {
        console.log("We found ", find, " at location ", i);
        return;
    }
    // false check at the peak
    if (i === arr.length - 1) {
        console.log(
            "So sorry :( ... we did not find ",
            find,
            "in the given array"
        );
        return;
    }
    console.log("climb", i);
    // climb loop
    linearSearchRecurse(i + 1, arr, find);
    // backtracking
    console.log("slide", i);
}
linearSearchRecurse(0, arr, find);
