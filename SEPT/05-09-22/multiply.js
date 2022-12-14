function multiply(a,b){
    var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumRows = b.length,
    bNumCols = b[0].length

    m = new Array(aNumRows);//initialize array of rows
    for(var r = 0;r<aNumRows;r++){
        m[r]=new Array(bNumCols);//initialize the current rows
        for(var c = 0;c<bNumCols;c++){
            m[r][c] = 0;//initialize the current cell 
            for(var i=0;i<aNumCols;i++){
                m[r][c]+=a[r][i]*b[i][c];
            }
        }
    }
    return m;
}
function display(m){
    for(var r = 0;r<m.length;r++){
        console.log("&nbsp;&nbsp;"+m[r].join("")+"<br/>")
    }
}
var a = [
    [1, 2],
    [4, 5]
],
b = [
    [7, 8],
    [9, 10]
];
if(a[0].length===b.length){
    console.log("matrix a: <br/>")
    display(a);
    console.log("matrix b: <br/>");
    display(b);
    console.log("a*b = <br/>");
    display(multiply(a,b));
}else{
    console.log("Invalidmatrix size");
}

