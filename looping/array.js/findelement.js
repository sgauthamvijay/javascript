var arr=[10,11,12,13,14]
var element=15, flag=0;

for(let num of arr){
    if(num==element){
        flag++;
        break;
    }
}
console.log(flag==0?"element found":"element found");