 class Parent{
     phone(){
         console.log("inside parent");

     }
    }
    class Child extends Parent{

    }
     
    var child=new Child();
    child.phone();