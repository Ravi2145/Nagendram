
function findMinimumAsoluteDist(arr,n){
    let ind = 0;
    let prev = arr[ind];
    let s =arr.length;

    //traverse the given array arr[]
    for(let i=0;i<n;i++){

        //Stores the minimum distance
        //to any array element  arr[i]
        let distance = Number.MAX_SAFE_INTEGER;

        //check if there is no safe 
        //position smaller than i
        if(i<arr[0]){
            distance = arr[0]-i;
        }

        //check if the current position
        //is between two safe positions
        else if(i>=prev && ind+1<s && i<=arr[ind+1]){

            //take the minimum of two distances
            distance = Math.min(i-prev,arr[ind+1]-i);

            //check if the current index is a safe position
            if(i==arr[ind+1]){
                distance = 0;
                prev = arr[ind+1];
                ind++;
            }
        } 
        //check if there is no safe 
        //position greater than i
        else{
            distance = i-prev;
        }

        //print the minimum distance
        console.log(distance+ " ");
    }
}

let n=5;
let arr = [3,1,2];
findMinimumAsoluteDist(arr,n);