// var a = {
//   foo: function() {
//     this.message = "hello world";
//     let message = "hello world";
//   }
// };
// a.foo()
// console.log(a.message);

// 

// setTimeout(function() { console.log(a); }, 1000); 
// console.log('hello world'); 
// var a = 'got here';


// function doIfTrue(isTrue, whatToDo)
// {
//   if(isTrue)
//     whatToDo();
// }
// var a = 'hello'; 
// doIfTrue(true, function() {a = 'world';}); 
// console.log(a); // prints "world"

// var b=0;
// var c=2;
// var a = b || c;
// console.log(a);

// var a = "1" == true;
// //var a = "1" === true; 
// console.log(a);


//prototype

function twoNumber(a, b){
    this.a = a;
    this.b = b;
}
twoNumber.prototype.add = function(){
    return this.a + this.b
}

twoNumber.prototype.sub =  function(){
    return Math.abs(this.a - this.b);
}

let addNumber  = new twoNumber(5,6)
let subNumber  = new twoNumber(3,6)

console.log(addNumber);
console.log(subNumber);
 
console.log(addNumber.add())
console.log(subNumber.sub())

