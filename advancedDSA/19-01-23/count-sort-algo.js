let arr = [1,4,2,3,1,1];
let min = Math.min(...arr);
let max = Math.max(...arr);
let range = max-min+1;
let freq = new Array(range).fill(0);

console.log(freq);
//finding the frequency
for(let i = 0;i < arr.length; i++){
    let index = arr[i];
    freq[index-1] = freq[index - 1] + 1;
}

console.log("frequency", freq);

//finding the frequency
for(let i=1;i<freq.length; i++){
    freq[i] = freq[i-1] + freq[i];
}

console.log("frequency sum ", freq);

//comparision
let result = new Array(arr).fill(0);

for(let i=0;i<arr.length; i++){
    let fI = arr[i] - 1;
    let aI = freq[fI];

    result[aI - 1] = arr[i];
    freq[fI] = freq[fI]- 1;

}

//fI = 0 aI = 3 [0,0,1,0,0,0]
//fI = 3 aI = 6 [0,0,1,0,0,4]

console.log("sorted array:", result);