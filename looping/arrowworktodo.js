var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names

// print avaialable product name

// print out of stock product details


// list all products whose price > 250

// low cost product

// is there any item available under 200


// function fibonacci(n){
//     if (n==0 | n ==1){
//         return n
//     } 
//     else{
//         return fibonacci(n-1)+ fibonacci(n-2)
//     }
// }


//1 print product names
// console.log(products.map(product=>product[1]));


//2 print avaialable product name
// console.log(products.filter(product=>product[3]>0).map(product=>product[1]));


//3  print out of stock product details
// console.log(products.filter(product=>product[3]==0).map(product=>product[1]));

// 4 list all products whose price > 250
// console.log(products.filter(product=>product[2]>250).map(product=>product[1]));


//5  low cost product
// var low_cost=0;
// for(let product of products){
//     if(product[3]<=low_cost){
//         low_cost=product[3]

//     }
// }
// console.log(product[1]);


//6 is there any item available under 200

// console.log(products.filter(product=>product[2]<200).map(product=>product[1]));


//low cost product.

// var low_cost=products.reduce((item1,item2)=>itme1[2]<itme2[2]?item1:itme2)
// console.log(low_cost);

// var high_stock =products.reduce((product1,product2)=>product1[3]>product2[3]?product1:product2)
// console.log(high_stock);




