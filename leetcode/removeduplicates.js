let removeDuplicateFromSortedArray = (nums)=>{
    let index = 0;
  
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]!==nums[i+1]){
            nums[index] = nums[i+1]
            index++;
        
        }
    }
    return index;
}
let nums = [0,0,1,1,2,2,2,3,3,4,4,4]
console.log(removeDuplicateFromSortedArray(nums));