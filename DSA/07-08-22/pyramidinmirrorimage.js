

function reversePyramidAndPyramid(n){
    let patt="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<i;j++){
            patt+=" ";
        }
        for(let k=i;k<n;k++){
            patt +=k+" ";
        }
        patt +="\n";
    }
    console.log(patt);
    
     for(i=1;i<=n;i++){
       let patt=""
        for(j=1;j<=n-i;j++){
              patt+=" ";
         }
         for(k=1;k<2*(i+1)-1;k++){
           patt +=k+" ";
         }
         console.log(patt);
     }
}
reversePyramidAndPyramid(9);
