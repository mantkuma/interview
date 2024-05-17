//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
// let weightData = [10, 4 , 5, 7 ,8, 9]
// let valData = [5, 3, 2, 3, 1, 2]
// let Weight =20;
// let weightData = [4,5,1]
// let valData = [1,2,3]
// let Weight =3;
let weightData = [1,3,4,5]
let valData = [1,4,5,7]
let Weight =7;
let arrayLength=4;
const knapsackTDA = async(wt, val, W, n) =>{
    let arr =[]
    for(let i =0;i<n+1;i++){
        arr[i] = []
        for(let j=0;j<W+1;j++){
            if(i===0 || j === 0){
                arr[i][j]=0
            }
        }
    }
    for(let i=1;i<n+1;i++){
        for(let j=1;j<W+1;j++){
           if(wt[i-1] <= j){
            arr[i][j] = Math.max((val[i-1] + arr[i-1][j-wt[i-1]]), arr[i-1][j])
           } else{
            arr[i][j] =  arr[i-1][j]
           }
        }
    }

    return arr;
}
let max = await knapsackTDA(weightData, valData, Weight, arrayLength);
return max;

}
dynamicPrograming().then(data => {
    console.log(data);
})