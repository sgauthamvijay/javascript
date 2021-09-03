var arr=[2,3,4,6]
var sum=10;


// for(let i=0; i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         let total=arr[i]+arr[j];
//         if(total==sum){
//             console.log(arr[i], arr[j]);
//             break;
//         }
//     }
// }

//2nd.

var low=0, upp=arr.length-1;
while(low<upp){
    let total=arr[low]+arr[upp];
    if(total==sum){
        console.log(arr[low],arr[upp]);
        break;
    }
    else if(total>sum){
        upp--;
    }
    else{
        low++
    }
}