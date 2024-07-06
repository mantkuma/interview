let bar;
function someAsyncApiCall(callback) {
  process.nextTick(callback);
}
someAsyncApiCall(() => {
  console.log("bar", bar); // 1
});

setImmediate(function () {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("timer complete and i am executed");
}, 0);
bar = 1;

console.log("hello mantosh");
