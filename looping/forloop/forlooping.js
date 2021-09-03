// for(let i=10; i>0; i--){
//     console.log(i);
// }

var num=13;
var flag=0;
for(let i=2;i<13;i++){
    if (i%num==0){
        flag+=1;
        break;
    }

}
console.log(flag==0?"prime number : not prime");