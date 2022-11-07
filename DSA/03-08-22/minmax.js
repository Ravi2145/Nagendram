
function findMinMax(array){
	let min =Number.MAX_VALUE;
	let max =Number.MIN_VALUE;

		for(let i=0;i<array.length;i++){
		//for updateing min element
		if(array[i]<min){
		min=array[i];
		}
		//for updateing max element.
		if(array[i]>max){
			max=array[i];
		}
	}
	console.log("Min: "+min);
	console.log("Max: "+max);
}
findMinMax([3, 2, 9, 8])
//console.log(Number.MAX_VALUE);
findMinMax([2, 3, 15, 6]);




//findMaxProfit(15,7,2,9);






// function getMinMax(arr,n){
// 	minmax = new Array();
// 	var i;
// 	var min;
// 	var max;

// 	if(n==1){
// 		minmax.max = arr[0];
// 		minmax.min = arr[0];
// 		return minmax;
// 	}
// 	if(arr[0]>arr[1]){
// 		minmax.max = arr[0];
// 		minmax.min = arr[1];

// 	}else{
// 		minmax.max = arr[1];
// 		minmax.min = arr[0];
// 	}
// 	for(i=2;i<n;i++){
// 		if(arr[i]>minmax.max){
// 			minmax.max=arr[i];
// 		}else if(arr[i]<minmax.min){
// 			minmax.min = arr[i];
// 		}
// 	}
// 	return minmax;

// }
// 	var arr = [2, 3, 15, 5];
// 	var arr_size = 4;
// 	minmax = getMinMax(arr,arr_size);
// 	console.log("minimun element is ",minmax.min);
// 	console.log("maximum element is ",minmax.max);









