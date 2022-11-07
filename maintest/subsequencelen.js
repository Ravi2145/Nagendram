
function subsequenceLength(array){
	
	if(arr.length == 0){
		return 0;
	}
	var len = 0;
	var maxlen = 1;
	for(let i=0;i<array.length;i++){
		if(array[i]<array[i+1]){
			len++;
		}else{
			len = 1;
		}
		maxlen = Math.max(len,maxlen);
	}
	return maxlen;
}
let arr = [1,2,5,4];
console.log(subsequenceLength(arr))


