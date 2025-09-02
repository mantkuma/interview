/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  if (position.length === 1) return 1;
  const time = position.reduce((acc, ele, i) => {
    acc.push({
      time: (target - ele) / speed[i],
      position: ele,
    });
    return acc;
  }, []);
  time.sort((a, b) => {
    return a.position - b.position;
  });
  let stack = [];
  let n = time.length - 1;
  while (n >= 0) {
    stack.push(time[n]);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1].time <= stack[stack.length - 2].time
    ) {
      stack.pop();
    }
    n = n - 1;
  }
  return stack.length;
};
// var carFleet = function (target, position, speed) {
//   let hash = {};
//   position.forEach((ele, i) => {
//     hash[ele] = i;
//   });
//   position.sort((a, b) => a - b);
//   function getTime(i) {
//     return (target - position[i]) / speed[hash[position[i]]];
//   }
//   let stack = [];
//   if (position.length === 1) return 1;
//   for (i = position.length - 1; i >= 0; i--) {
//     console.log(stack, position[i]);
//     if (stack.length === 0) {
//       stack.push(getTime(i));
//     } else {
//       stack.push(getTime(i));
//     }
//     if (stack[stack.length - 1] <= stack[stack.length - 2]) {
//       stack.pop();
//     }
//   }
//   console.log(stack);
//   return stack.length;
// };
const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
