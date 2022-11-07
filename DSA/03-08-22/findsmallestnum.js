

function findSmallestEle(array){
    let smallest=Number.MAX_VALUE;
    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
           smallest= array[i];
        }
    }
    console.log(smallest)
}
findSmallestEle([13,16,18,14,8,5,6]);
findSmallestEle([4,6,8,2])


let small = (nums)=>{
    let small = Number.MAX_VALUE;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<small){
            small=nums[i];
        }
    }
    console.log(small);
}
small([23,4,45,21,54,76]);