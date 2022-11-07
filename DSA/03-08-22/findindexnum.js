

function findIndexNumber(arr,t){
    let output = [];
    for(let i=0;i<arr.length;i++){
        if(t===arr[i]){
            output.push(i);
        }
        console.log(output);
    }
}
const arr = ["gfg","geeks","portel","computerscience","gfg","gfg","geeks"]
findIndexNumber(arr,"geeks");


function findIndex(nums,target){
    let output = [];
    for(let i=0;i<nums.length;i++){
        if(target==nums[i]){
            output.push(i);
        }
       
    }
    return output;
}
console.log(findIndex([2,3,4,5,1,6],5));