var obj = {
  val: 2,
  func: function (x) {
    this.val += x;
    console.log(this.val);
  },
};

let obj2 = {
  val: 8,
};
obj.func(4);
let nf = obj.func.bind(obj2);
nf(3);
console.log(obj.val);
