
// ************CALL APPLY BIND**************************
let x=500;
//Context 1
let data1 = {
        x :10,
        getXPlusY: function(){
            let y=5
            return this.x+y
        }
}
//Context 2
let data2 = {
    x :20,
    getXMinusY : function(){
        let y = 7;
        return this.x-y
    }
}
console.log(data1.getXPlusY())
console.log(data2.getXMinusY());
console.log("result call " + data2.getXMinusY.call(data1))  //using call
console.log("result apply " + data2.getXMinusY.apply(data1))  //using call
let minus = data2.getXMinusY.bind(data1);
console.log(minus());
console.log("************************************************************************************");

// ************************************************************************************
const data3 = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = data3.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// the resason is you have copied the function in varibale unbounded x but not pass the context of data3
//due to which the value x is undefined here
// Expected output: undefined

const boundGetX = unboundGetX.bind(data3);
console.log(boundGetX());
// Expected output: 42

console.log("************************************************************************************");

let data5 = {
    x:50,
    getAdd: function(y){
        return this.x+y
    }
}

let data6 = {
    x:20,
    getSub: function(y){
        return this.x-y
    }
}

console.log(data5.getAdd(5))
console.log(data6.getSub(5))
let getSubFromData5  =  data6.getSub.bind(data5);
console.log(getSubFromData5(17))
console.log("result call " + data6.getSub.call(data5,17))  //using call
console.log("result apply " + data6.getSub.apply(data5,[18]))  //using call











//Context 1
let user = {
    firstname : "MS",
    lastname : "Dhoni",
    address : "india",
    getName : function(){
        return `${this.firstname} ${this.lastname}`
    }
}
//Context 2
let user2 = {
    firstname : "Rohit",
    lastname : "Sharma",
    address : "Banglore",
    getNameWithAddress : function(){
        return `${this.firstname} ${this.lastname} from ${this.address}`
    }
}
let getNameAndAddress = user2.getNameWithAddress.bind(user)
let getName = user.getName.bind(user2);
console.log(getName());
console.log(getNameAndAddress())













function alert() { 
  console.log(this.age); 
} 

const myObj = { 
  age: 22 
}; 


const bar = function() { 
  alert.call(myObj); 
}; 

bar(); // 22
setTimeout(bar, 100); // 22 
// a hard-bound `bar` can no longer have its `this` context overridden 