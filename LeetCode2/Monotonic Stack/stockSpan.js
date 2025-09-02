const start = function () {
  let arr = [[], [31], [41], [48], [59], [79]];
  let prices = [];
  //let arr = [[], [100], [80], [60], [70], [60], [75], [85]];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0]);
    if (arr[i][0]) {
      prices.push(arr[i][0]);
    }
  }
};
start();
// var StockSpanner = function () {
//   this.stack = [];
//   this.index = -1;
//   this.prices = [];
//   this.spans = [];
//   this.spans.push(1);
//   this.prices.push(-1);
//   this.stack = [];
//   this.index++;
// };

// /**
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function (price) {
//   this.index++;
//   this.prices.push(price);
//   if (this.stack.length === 0) {
//     this.stack.push(this.index);
//     this.spans.push(1);
//     return 1;
//   } else {
//     while (
//       this.stack.length > 0 &&
//       this.prices[this.stack[this.stack.length - 1]] <= price
//     ) {
//       this.stack.pop();
//     }
//     if (this.stack.length === 0) {
//       this.spans.push(this.index + 1);
//       this.stack.push(this.index);
//       return this.index + 1;
//     } else {
//       let span = this.index - this.stack[this.stack.length - 1];
//       this.spans.push(span);
//       this.stack.push(this.index);
//       return span;
//     }
//   }
// };

// /**
//  * Your StockSpanner object will be instantiated and called as such:
//  * var obj = new StockSpanner()
//  * var param_1 = obj.next(price)
//  */

// let stockSpanner = new StockSpanner();
// console.log(stockSpanner.next(100)); // return 1
// console.log(stockSpanner.next(80)); // return 1
// console.log(stockSpanner.next(60)); // return 1
// console.log(stockSpanner.next(70)); // return 2
// console.log(stockSpanner.next(60)); // return 1
// console.log(stockSpanner.next(75)); // return 4
// console.log(stockSpanner.next(85)); // return 6
