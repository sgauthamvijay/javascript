// var i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// var num=123;
// var sum=0;
// while(num!=0){
//     let digit=num%10;
//     console.log(digit);
//     sum+=(digit**3);
//     num=Math.floor(num/10);
// }
// console.log(sum);

// var num=153;
// var sum=0;
// while(num!=0){
//     let digit=num%10;
//     console.log(digit);
//     sum=(sum*10)+digit;
//     num=Math.floor(num/10);
// }
// console.log(sum);

// var num=2, low=8, up=28;
// var i=1;

// while(i<=28){
//     let res=i**num

//     if(res>low & res<up){
//         console.log(i);
//     }

//     i++;
// }



//forloop.
//prime number

// var num=20;
// var i=2;
// for(let i=2; i<num; i++){
//     if(num%i==0){
//         break;
//     }
// }
// console.log(num%i==0?"not prime": "prime number");


    //nested for loop.

//    for(i=1;i<=3;i++){
//        for(j=1;j<=3;j++){
//            console.log(i);
//        }
//    }

//string in nested forloop.


// for(i=1;i<=3;i++){
//     let str="";

// for(j=1;j<=3;j++){
//     str+=i;
// }
// console.log(str);
// }


//nested forloop print star.

// for(i=1;i<=4;i++){
//     let str=""
//     for(j=1; j<=i; j++){
//         str+="*"
//     }
//     console.log(str);
// }

//star print


// spaced star.

// for( let row=1; row<=6; row++){
//     let str="";
//     for( let space=6; space>row;space--){
//          str+=" "
//     }
//     for( let star=1; star<=row; star++){
//          str+="* "
//     }
//     console.log(str);

// }

//inverted star.

// for(let i=1; i<=4; i++){
//     let str=""
//     for(let s=3; s>=1; s--){
//         str=" "
//     }
//     for( let j=4; j>=i; j--){
//         str+=" * "
//     }
//     console.log(str);
// }





// var arr=[1,2,3,4,5,6]
// for(let i=1;i<=arr.length;i++){


// }

//sum of digits
// var num=13, sum=0;

// while(num>0){
//    let digit=num%10;
//     sum+=digit;
//     console.log(sum);
// }


// sum of digits.

// var num=13 , sum=0;
// while(num!=0){
  
//     let digit=num%10;
//     sum=sum+digit;
//     num=Math.floor(num/10);
// }

//   console.log(sum);
    

    
    
   
    
    
//   



//hcf of two numbers.

// var num1=24, num2 =36;

// for(let i=1;i<=num1 && i<=num2; i++){
//     if(num1%i==0 && num2%i==0){
//         hcf=i;
        
//         }
   
// }
// console.log(hcf);


       
// fibonacci(4)=>2

// var a=1, b=2, sum=0;
// for(let sum=0; sum<=4; sum++){
//     let sum=a+b;
//     a=b;
//     b=sum;
//     console.log(sum);
// }

// fibonacci(6)=>5

// var a=3, b=5, sum=0;
// for(let sum =0; sum<=6; sum++){
//     let sum=a+b;
//     a=b;
//     b=sum;
//     console.log(sum);
// }




//check if two arrays are same or not?

var arr1=[1,2,3,4,5]
var arr2=[4,3,5,1,6]



for(let i=0; i<=arr1.length;i++){
   for (let j=0; j<=arr2.length; j++)
  if(arr1[i]==arr2[j]){
      console.log("They are same");
    
  }
  else{
      console.log("They are not same");
      
  }
        
    }

    


        
    


    
    
    

    







 



