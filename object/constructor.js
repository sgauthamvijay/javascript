class Person{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    printPerson(){
        console.log(this.age, this.name);
    }
}
var person=new Person(25, "ajay");
person.printPerson()


class Calculation{
    add(){
        console.log("inside two arguments");
    }
    add(num1){
        console.log("inside two arguments");
    }
    add(num1,num2){
        console.log("inside two arguments");
    }
}





