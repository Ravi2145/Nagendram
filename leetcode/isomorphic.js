 var isIsomorphic = function(s,t){
   if(s.length!==t.length){
      return flase
   }
    //map both s, and t char to i+1
    const mapa = new Map();
    const mapb = new Map();

    for(let i=0;i<s.length;i++){
      if(mapa.has(s[i]) && mapa.get(s[i]!==t[i])){
         return false;
      }else{
         mapa.set(s[i],t[i])
      }
      if(mapb.has(t[i]) && mapb.get(t[i]!==s[i])){
         return false;
      }else{
         mapb.set(t[i],s[i])
      }
    }
    return true;
   
 }
 let s="egg",t = "add"
 console.log(isIsomorphic(s,t));





 function isIsomorphic1(s,t){
   if(s.length!==t.length){
      return false;
   }
   const map = {}

   for(let i=0;i<s.length;i++){
      const mapa = s[i];
      const mapb = t[i];
      if(map[mapa]===undefined){
         map[mapa] = mapb
      }else if(map[mapa]!==mapb){
         return false;
      }
   }
   return true;
 }
 let s1 = "egg"; let t1 = "app"
 console.log(isIsomorphic1(s,t))



 



