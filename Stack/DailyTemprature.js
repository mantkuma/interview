// Given an temperaturesay of integers temperatures represents the daily temperatures,
// return an temperaturesay answer such that answer[i] is the number of days you have to wait after the ith day
// to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0
// instead.

//Small Error(will Check Later);

var dailyTemperatures = function (temperatures) {
  let stack = [];
  let res = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res.push(0);
      stack.push({
        temp: temperatures[i],
        index: i,
      });
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].temp > temperatures[i]
    ) {
      res.push(stack[stack.length - 1].index);
      stack.push({
        temp: temperatures[i],
        index: i,
      });
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].temp < temperatures[i]
    ) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1].temp <= temperatures[i]
      ) {
        stack.pop();
      }
      stack.length > 0 ? res.push(stack[stack.length - 1].index) : res.push(0);
      stack.push({
        temp: temperatures[i],
        index: i,
      });
    }
  }
  console.log(res);
  res = res.reverse();
  for (let i = 0; i < res.length; i++) {
    if (res[i] - i >= 0) {
      res[i] = res[i] - i;
    } else {
      res[i] = 0;
    }
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
