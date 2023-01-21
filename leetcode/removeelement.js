
let removeElement = (nums,val)=>{
    let index = 0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]!==val){
            nums[index]=nums[i];
            index++;
        }
    }
    return index;
}
let nums = [1,2,3,4,4]
console.log(removeElement(nums,4));