
// move zeros at the end
let moseZeros = (nums)=>{
    let n=nums.length;
    if(n==0||n==1){
        return;
    }
    let left = 0;
    let right = 0;
    let swap
    while(right<n){
        if(nums[right]==0){
            ++right;
        }
        else{
            swap= nums[left];
            nums[left] = nums[right];
            nums[right] = swap
            ++right;
            ++left;
            
        }
    }
    return nums;
}
let nums = [1,0,3,0,12]
console.log(moseZeros(nums))






