var combination = function(n,k){
    const result = [];
    const walk = (temp)=>{
        if(temp.length===k){
            result.push(temp);
            return;
        }
        //pick numbers from start to n
        const start = temp.length=== 0 ? 1 : temp[temp.length-1]+1;
            for(let i=start;i<=n;i++){
                walk(temp.concat(i))
        }
    }
    
    walk([])
    return result;
    
}
let n=4,k=2;
console.log(combination(n,k))