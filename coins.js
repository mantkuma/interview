let arr = [1, 2, 5];
let sum = 11;
let hash = {};

const getCoins = async (coin, target, index) => {
  console.log(hash);
  if (hash[`${index}:${target}`] || hash[`${index}:${target}`] === 0) {
    return hash[`${index}:${target}`];
  }
  if (target === 0) {
    return 1;
  }
  if (target < 0) {
    return 0;
  }
  if (index < 0) {
    return 0;
  }
  if (coin[index] <= target) {
    let a = await getCoins(arr, target - arr[index], index);
    let b = await getCoins(arr, target, index - 1);
    hash[`${index}:${target}`] = a + b;
    return a + b;
  } else {
    const res = await getCoins(arr, target, index - 1);
    hash[`${index}:${target}`] = res;
    return res;
  }
};

const exec = async () => {
  const res = await getCoins(arr, sum, arr.length - 1);
  console.log("Total coins used: ", res);
};
exec();
