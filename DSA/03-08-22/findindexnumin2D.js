

function findIndexNumberIn2Darr(arr,t){
    let output = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(t===arr[i][j]){
                output.push(i,j);
            }
        }
    }
    console.log(output);
}
const arr = [
    ["gfg","gfg","geeks"],
    ["data","geeks","gfg"],
    ["conputerscience","portal","data"]
];
findIndexNumberIn2Darr(arr,"portal");
findIndexNumberIn2Darr(arr,"data");
findIndexNumberIn2Darr(arr,"gfg");




function findIndexNumberIn2Darr1(nums,target){
    let res = [];
    for(let i=0;i<nums.length;i++){
        for(j=0;j<nums[i].length;j++){
            if(target===nums[i][j]){
                res.push(i,j);
            }
        }
    }
    return res;
}
let nums=[[1,2,3],
         [4,3,2],
         [5,6,7]];
console.log(findIndexNumberIn2Darr1(nums,3));