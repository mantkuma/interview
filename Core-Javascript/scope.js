/** Functional Scope : Inside a function all 
 *  valiable are accessible, but not ouside
 *  the finction */
var global =  10;
let global1 = 15;
const global3 = 20; 

function printIfGFG( text){
   var v1 = "Mantosh"
   let v2 = "Kumar"
   const v3 = "Pramanik"
   console.log(v1) //accessible
   console.log(v2) //accessible
   console.log(v3) //accessible
   console.log(global) //accessible
   console.log(global1) //accessible
   console.log(global3) //accessible
}
// console.log(v1)   //not accessible
// console.log(v2)   //not accessible
// console.log(v3)   //not accessible
printIfGFG()

/** Block Scope :let and const are 
 *  not accesible but var is accessible
 * outside the scope
 */

{
    let v4 =  "Mantosh" 
    var v5 =  "Kumar"  
}
    console.log(v5)     //accessible
//  console.log(v4)    //not accessible

function myFunction() {
  let carName = "Tata";
    function test() {
        let carModel = "Punch";
        console.log(carName); //accessible
    }
    test()
// console.log(carModel); //not accessible
}

myFunction()

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);