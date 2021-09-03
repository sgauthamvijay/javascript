var employee={
    eid:1001,
    e_name:"ram",
    desig:"devoloper",
    salary:5000
}

//print employee name.

// console.log(employee.e_name);

// chk for exp is present if not add exp:1 else current exp+1
// console.log("exp" in employee);

// "exp" in employee?employee.exp+=1:employee.exp=1

for(let key in employee){
    console.log(key);
    // console.log(employee[key]);
}