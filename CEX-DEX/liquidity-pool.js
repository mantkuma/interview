let total_coin = 1000000;
let total_amount = 100000000;
const amount_constant = total_amount * total_coin;
let price = total_amount / total_coin;
let stop_buy = false;
let stop_sell = false;
console.log(amount_constant);
console.log(price);
function buy_Coin(coins) {
  if (total_coin < coins) {
    console.log("coins not available");
    return;
  } else {
    console.log("coin buy " + coins);
    total_coin -= coins;
    total_amount = amount_constant / total_coin;
    price = total_amount / total_coin;
    return;
  }
}

function sell_coin(coins) {
  console.log("coin sell " + coins);
  total_coin = total_coin + coins;
  total_amount = amount_constant / total_coin;
  price = total_amount / total_coin;
  return;
}

function current_price() {
  console.log(price);
  return;
}
setInterval(function () {
  let coins = Math.random().toString().slice(2, 6);
  if (Math.random().toString().slice(2, 3) >= 5) {
    if (!stop_buy) {
      buy_Coin(coins);
      current_price();
    }
  } else {
    if (!stop_sell) {
      sell_coin(parseInt(coins));
      current_price();
    }
  }
  if (price > 110) {
    stop_buy = true;
    console.log("stop buy");
  } else {
    stop_buy = false;
  }
  if (price < 90) {
    stop_sell = true;
    console.log("stop sell");
  } else {
    stop_sell = false;
  }
}, 1000);
