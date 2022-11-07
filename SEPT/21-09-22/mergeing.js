
//mergeing
let merge1 = (arr1,arr2,n,m)=>{
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    let res = [];
    let i,j,k
    i=j=k=0;
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            res[k++] = arr1[i++];
        }else{
            res[k++]=arr2[j++];
        }
    }
    while(i<n){
        res[k++]=arr1[i++];
    }
    while(j<m){
        res[k++]=arr2[j++];
    }
    return res;

}
let arr3 = [2,10,18,20,23];
let arr4 = [4,9,19,25];
let n=arr3.length;
let m=arr4.length;
console.log(merge1(arr3,arr4,n,m))