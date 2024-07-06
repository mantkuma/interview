var obj = {a: 1 ,b: 2}
var objclone = Object.assign({c:5},obj);
var obj2 = obj;
obj2.a = 5; 
objclone.a=12;
console.log(obj)
console.log(objclone)