// array = [4,5,6,7,0,1,2];
// target =1

// 1.find pivot(start+end)/2
// 2.check if(pivot===target)
//     2.1if yes return indexe
// 3.find which part is sorted
//     (arra[low]>array[mid-1])
// 4.find if target present in sorted part
// 5.then go to the other half
//     (start = mid+1)
// 6.go to step

// [4,5,6,7,0,1,2] start=0 end=6 pivot=3
// [- - - - 0,1,2] start=4 end=6 pivot=5
// [- - - - - - 2] start=6 end=6 pivot=6

// if target == array[pivot]
// return pivot

// array = [4,5,6,7,0,1,2];
// target =1
// target <=arr[pivot-1] && target >=arr[0]



let findIndex = (arr,target)=>{
    let start =0;
    let end = arr.length-1;
    found = false
    while(start<=end){
    let mid = Math.floor((start+end)/2)
        if(arr[mid]===target){
            console.log(mid)
            found = true;
            break;
        }
        else if(arr[mid-1]>=arr[start]){
            if(target<=arr[mid-1] && target>=arr[start]){
                end = mid-1
            }else{
                start = mid+1
            }
        }else{
            if(target<=arr[end] && target>=arr[mid]){
                start = mid+1 
            }else{
                end = mid-1
            }
        }
    }
    if(!found){
        console.log(-1);
    }

}
findIndex([4,5,6,7,8,0,1,2,3],2)











 



array = [4,5,6,7,8,0,1,2,3]
target = 3

start = 0
end = array.length - 1 
found = false
count = 0
while (start <= end ){
  count++
  console.log('Loop :', count)
  mid = Math.floor((start + end) / 2)
  if (array[mid] === target){
    console.log(mid)
    found = true
    break
  }
  else if (array[mid - 1] >= array[start]){
    if (target <= array[mid - 1] && target >= array[start]){
      end = mid - 1
    }else{
      start = mid + 1
    }
  }else{
    if (target <= array[end] && target >= array[mid]){
      start = mid + 1
    }else{
      end = mid - 1
    }
  }
}
if(!found){
  console.log(-1)
}




