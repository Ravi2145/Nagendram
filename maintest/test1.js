//1.
function solve(n,k,a,b)
{
  if(Math.abs(a-b)>=k && b<=n){
	  return 1
  }else{
	  return 0
  }
}
//Driver Code
var t = readline();
while(t--)
{
   var x1 = readline();
   var x = x1.trim();
   var y = x.split(" ");
   var n = Number(y[0]);
   var k = Number(y[1]);
   var q = Number(y[2]);
	while(q--)
	{
		var query1 = readline();
		var query2 = query1.trim();
		var query = query2.split(" ");
		var a = Number(query[0]);
		var b = Number(query[1]);
		var num  = solve(n,k,a,b);
		print(num);
	}
}




// let t= readline();
// console.log(t);
let t = readline();
for(let i=0;i<t;i++){
	let nkq = readline().split(" ");
	let [n,k,q] = nkq
	//console.log("N=>",n,"k=>",k,"Q=>",q);
	for(let j=0;j<q;j++){
		let ab = readline().split(" ");
		let a,b;
		[a,b] = ab
		//console.log("A=>",a,"B=>b")
		if(Math.abs(a-b)>=k && b<=n){
			console.log(1);
		}else{
			console.log(0)
		}
	}
}




function solve1()