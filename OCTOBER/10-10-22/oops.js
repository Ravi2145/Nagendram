
class Vehicle{
    color;
    type;
    no_of_tyres;
    constructor(color,type,no_of_tyres){
        this.color=color;
        this.type=type;
        this.no_of_tyres=no_of_tyres;


    }

};
var bike = new Vehicle("red","petrol",2);
console.log(bike);//{color:"red",type:"petrol",no_of_tyres:2}



class Vehicle1{
    color;
    type;
    no_of_tyres;
    constructor(color,type,no_of_tyres){
        this.color=color;
        this.type=type;
        this.no_of_tyres=no_of_tyres;
    }
}
var car = new Vehicle1("blue","diesel",4)
console.log(car.color);//blue
console.log(car.no_of_tyres);//4



class ThisDemo{
    msg="This is this keyword demo";
    getMsg(){
      return this.msg;
    }
};
// var demo = new ThisDemo()
console.log(new ThisDemo().getMsg());//This is this keyword demo


var Demo = this;
console.log(Demo)//Global object



//strict mode
function demo(){
    return this;
}   
// console.log(demo());
console.log(demo);//[Function:demo]




class demo1{
    msg="this is new keyword demo";
}
var obj = new demo1()
console.log(obj.msg);//this is new keyword demo
console.log(demo1.msg);//undefined

