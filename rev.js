let input = ["I", "am", "a", "developer"];
let sequence = input.reduce((acc, ele) => {
  acc.push(ele.length);
  return acc;
}, []);
let i = 0;
input = input.join("").split("").reverse().join("");
let output = sequence.reduce((acc, ele) => {
  acc.push(input.slice(i, i + ele));
  i = i + input.slice(i, i + ele).length;
  return acc;
}, []);
console.log(output);
//[ 'r', 'ep', 'o', 'levedamaI' ]
