let User = new Object;
User = {
    name : "Mantosh",
    city : "Ranchi"
}


const object1 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(User.hasOwnProperty('name'));
console.log(Object.getOwnPropertyNames(User));
// Expected output: Array ["a", "b", "c"]
