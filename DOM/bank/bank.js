//local storage.

// localStorage.setItem("username", "abc123")
// localStorage.setItem("password","abc123")

// localStorage.getItem("password","abc123")

// localStorage.setItem("token","@123")

var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
var person2={pname:"ram pj",account_number:1001,balace:2000,password:"userone"}

localStorage.setItem(person1.account_number,JSON.stringify(person1))

function getBalance(account_number){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        console.log(user.balace);
    }
    else{
        console.log("invalid account number");
    }
}

function authenticateAcc(account_number,password){
    if(account_number in localStorage){
    let user=JSON.parse(localStorage.getItem(account_number))
    if(user.password==password && user.account_number==account_number){
        console.log("login success");
    }
    

    
}
else{
    console.log("invalid account number");
}
}