var weather=[
    {dis_name:"tsr",temp:25},
    {dis_name:"tvm",temp:26},
    {dis_name:"ekm",temp:29},
    {dis_name:"pkd",temp:30},
    {dis_name:"idk",temp:15},
    {dis_name:"mpm",temp:29},
    {dis_name:"tsr",temp:27},
    {dis_name:"tvm",temp:23},
    {dis_name:"ekm",temp:31},
    {dis_name:"pkd",temp:27},
    {dis_name:"idk",temp:17},
    {dis_name:"mpm",temp:25}
]
var max_weather={}
for(let data of weather){
    let district=data.dis_name;
    let cur_temp=data.temp;

}
if(! (district in max_weather)){
    max_weather[district]=cur_temp
}
else{
    let old_temp=max_weather[district];
    if(old_temp<curr_temp){
        max_weather[district]=cur_temp
    }
}