/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let l=0;
    let r=1;
    while(l<r && r<prices.length){
        if(prices[l] > prices[r]){
            l=r;
            r=r+1;
        }else{
            max = prices[r]-prices[l]>max ? prices[r]-prices[l] : max;
            r=r+1;
        }
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]))