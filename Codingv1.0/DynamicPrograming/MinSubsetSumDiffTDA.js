//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
wt=[1,2,7]
let n =wt.length;
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
                arr[i][j] = arr[i-1][j]+ arr[i-1][j-wt[i-1]]
                } else{
                    arr[i][j] =  arr[i-1][j]
                }
            }
        }
    console.log(arr);
    return arr;
}


let range  = wt.reduce((acc, ele)=> {
        return acc+ele
},0)
let max = await SSPTDA(wt, n, range);
let min = 0;

let vr = max[n].reduce((acc, ele, i)=> {
    if(ele=== 1){
        acc.push(i)
    }
    return acc
},[])
console.log(vr);
for(i=1;i<range/2;i++){
    min = Math.abs(Math.min(min , (range-2*vr[i])))
}
return min;
}
dynamicPrograming().then(data => {
    console.log(data);
})


