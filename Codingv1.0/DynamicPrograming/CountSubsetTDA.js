//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
let arr = [2,3,5,6,8,10]
let target =10
// let arr = [3, 34, 4, 12, 5, 2];
// let target=30
let n =arr.length;
let res = 0;
const SSPTDA = async(wt, n, sum) =>{
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
            let sum1 = wt[i-1] + arr[i-1][j-wt[i-1]];
            let sum2 = arr[i-1][j];
            arr[i][j] = sum1 + sum2
           } else{
            arr[i][j] =  arr[i-1][j]
           }
        }
    }
    return arr[n][target];
}
let max = await SSPTDA(arr, n, target);
return max;

}
dynamicPrograming().then(data => {
    console.log(data);
})





// const dynamicPrograming = async()=>{
// // let arr = [2,3,7,8,10]
// // let target=11
// let arr = [3, 34, 4, 12, 5, 2];
// let target=30
// let n =arr.length;
// let res = 0;
// const SSPTDA = async(wt, n, sum) =>{
//     let arr =[]
//     for(let i =0;i<n+1;i++){
//         arr[i] = []
//         for(let j=0;j<sum+1;j++){
//             if(i===0 || j === 0){
//                 arr[i][j]=0
//             }
//         }
//     }
//         for(let i=1;i<n+1;i++){
//         for(let j=1;j<sum+1;j++){
//            if(wt[i-1] <= j){
//             let sum1 = wt[i-1] + arr[i-1][j-wt[i-1]];
//             let sum2 = arr[i-1][j];
//                 if(sum1===target) res=res+1;
//                 if(sum2===target) res=res+1
//             arr[i][j] = Math.max(sum1,sum2)
//            } else{
//             arr[i][j] =  arr[i-1][j]
//            }
//         }
//     }
//     return res;
// }
// let max = await SSPTDA(arr, n, target);
// return max;

// }