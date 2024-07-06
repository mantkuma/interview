process.nextTick(() => {
  console.log("nextTick");
});
Promise.resolve().then(() => console.log("promise console"));
console.log("console");
setImmediate(function () {
  console.log("setImmediate");
});
