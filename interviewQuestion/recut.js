let n = 5;
function print(val) {
  console.log(val);
  if (val > 0) {
    print(val - 1);
  }
  console.log(val);
}

print(n);
