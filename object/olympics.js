var olympics=[
    
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},   
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},

]

// 1 print countrynames partcipating 2021 olympics

// 2 which country got most goldmedals

// 3 which contry got most medals

//4  sort countries based on gold medals

//5 sort countries based on total medals

//6 countries got silver > 10

//7 list of countries whose goldmedal=0

//8 list the country names whose gold medal >20

//9 is pakisthan participating in 2021 olympics



//1;
// for(let country of olympics){
//     console.log(country.country);
// }
// olympics.map(nation=>nation.country).forEach(c_name=>console.log(c_name))

//2
// var max_gold=olympics.reduce((nation1,nation2)=>nation1["gold"]>nation2["gold"]?nation1:nation2)
// console.log(max_gold);

//3
//  var max_medal=olympics.reduce((nation1,nation2)=>nation1["total"]>nation2["total"]?nation1:nation2)
//  console.log(max_medal);

//4
// var sor_by_gold=olympics.sort((naiton1,nation2)=>naiton1.gold-nation2.gold)
// console.log(sor_by_gold);

//5
// var sor_by_medals=olympics.sort((nation1,nation2)=>nation2.total-nation1.total)
// console.log(sor_by_medals);

//6
// var silver_gt_10=olympics.filter(nation=>nation.silver>10)
// console.log(silver_gt_10);

//7
// var gold_0=olympics.filter(nation=>nation.gold==0)
// console.log(gold_0);

//8
var pakisthan=olympics.some(nation=>nation.country=="pakisthan")
console.log(pakisthan);