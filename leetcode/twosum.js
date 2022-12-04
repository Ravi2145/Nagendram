

var twoSum = function(nums,target){

    let map =new Map();
    for(let i=0;i<nums.length;i++){
        let num1 = nums[i];
        //console.log(num1);
        let num2 = target-num1;
        //console.log(num2);
        if(map.has(num2)){
           return [map.get(num2),i];
        }
        map.set(num1,i);
        
    }

}
var num = [7,2,11,15,10];
//const num3 = [12,8,43,54,7,2,3,76,98,7,3];
console.log(twoSum(num,17));
//console.log(twoSum(num,18));
//console.log(twoSum(num3,10));
//console.log(twoSum(num3,10));


function twosum(nums,target){
    for(let i=0;i<nums.length;i++){
        // console.log(nums[i]);
        for(let j=0;j<nums.length;j++){
            // console.log(nums[j]);
            if(i==j){
                continue;
            }
            if(nums[i]+nums[j]==target){
                return [i,j];


                
            }
        }
    }
}
//let nums = [2,7,5,11,10];
console.log(twosum([2,7,5,11,10],12));
// console.log(twosum([2,7,5,11,10],7));


