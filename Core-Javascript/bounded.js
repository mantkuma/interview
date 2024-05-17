const data3 = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
console.log(data3.getX());
const unboundGetX = data3.getX;
console.log(unboundGetX);
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(data3);
console.log(boundGetX());
// Expected output: 42