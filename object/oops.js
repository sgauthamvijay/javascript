// class person{
//     setPerson(age,name){
//         this.age=age;
//         this.name=name;
//     }
//     getAge(){
//         return this.age
//     }
//     getName(){
//         return this.name
//     }
// }


// var obj1=new person();
// var obj2=new person();
// obj1.setPerson(25,"ravi")
// console.log(obj1.getName());


class Bank{
    accountCreate(accno,ac_type,balance){
        this.accno=accno;
        this.ac_type=ac_type;
        this.balance=balance;
    }
    Deposit(amount){
        this.balance+=amount;
        console.log(`Your account number ${this.accno} is credited with ${amount}`);
    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount;        
    }
    else{
        console.log("insuffiecient balance transaction end with error code");
    }
    }
    
    bal_enquiry(){
    console.log(`Your account balance is ${this.balance}`);
    }



  var obj=new Bank()
    obj.accountCreate(1001,"savings",50000)
    obj.Deposit(20000);
