/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
 let wt = nums
 let n=nums.length;
 let sum =  wt.reduce((acc,ele)=> {
    return acc+ele;
 },0)
 if(target>sum) return 0;
 let arr =[]
        for(let i =0;i<n+1;i++){
            arr[i] = []
            for(let j=0;j<sum+1;j++){
                if(i===0){
                arr[i][j]=0
                }
                if(j==0){
                arr[i][j] = 1;
                }
            }
        }
        for(let i=1;i<n+1;i++){
            for(let j=1;j<sum+1;j++){
                if(wt[i-1] <= j){
                arr[i][j] = arr[i-1][j] + arr[i-1][j-wt[i-1]]
                } else{
                    arr[i][j] =  arr[i-1][j]
                }
            }
        }
console.log(arr)
return arr[n][(sum+target)/2];
};


let nums = [0,0,0,0,0,0,0,0,1];
target = 1;
console.log(findTargetSumWays(nums, target))