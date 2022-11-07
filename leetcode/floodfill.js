
function floodFill(image,sr,sc,color){
    //In fill function
    //out of bounds check
    //selected color is not same colr as a starting point return
    if(image==null || image.length<1 || image[sr][sc]==color){
        return image
    }
    const initCol = image[sr][sc];
    const fill = (image,r,c,color,initCol)=>{
        if(r<0||r>=image.length||c<0||c>=image[0].length||initCol != image[r][c]){
            return;
        }
        image[r][c]=color;
        fill(image,r-1,c,color,initCol)
        fill(image,r+1,c,color,initCol)
        fill(image,r,c-1,color,initCol)
        fill(image,r,c+1,color,initCol)
    }
    fill()
    return image
}
let img=[[1,1,1],[1,1,0],[1,0,1]]
let sr = 1
let sc = 1
let col = 2
console.log(floodFill(img,sr,sc,col));