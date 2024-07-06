//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
// let weightData = [10, 4 , 5, 7 ,8, 9]
// let valueData = [5, 3, 2, 3, 1, 2]
// let Weight =20;
let weightData = [4,5,1]
let valueData = [1,2,3]
let Weight =3;
let arrayLength= weightData.length;
let hash = {};
const knapsack = async(wt, value, W, n) =>{
    if(hash[n+':'+W]){
        return hash[n+':'+W];
    } 
    // BaseCondition
    // Choice Diagram
    if(n === 0 || W===0 ){
        return 0;
    }
    if(value[n-1]<=W){
        let a = value[n-1] + await knapsack(wt, value, W-value[n-1], n-1)
        let b = await knapsack(wt, value, W, n-1)
        let data =  Math.max(a,b)
        hash[n+':'+W] = data;
        return data
    } else if(value[n-1] > W){ 
        let data = await knapsack(wt, value, W, n-1);
        hash[n+':'+W] = data;
        return data
    }
}
let max = await knapsack(weightData, valueData, Weight, arrayLength);
return max;

}
dynamicPrograming().then(data => {
    console.log(data);
})