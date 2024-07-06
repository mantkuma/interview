//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
wt=[1,1,1,1,1]
let n =wt.length;
const SSPTDA = async(wt, n, sum) =>{
    let arr =[]
        for(let i =0;i<n+1;i++){
            arr[i] = []
            for(let j=0;j<sum+1;j++){
                if(i===0){
                arr[i][j]=false
                }
                if(j==0){
                arr[i][j] = true;
                }
            }
        }
        for(let i=1;i<n+1;i++){
            for(let j=1;j<sum+1;j++){
                if(wt[i-1] <= j){
                arr[i][j] = arr[i-1][j]||arr[i-1][j-wt[i-1]]
                } else{
                    arr[i][j] =  arr[i-1][j]
                }
            }
        }
    return arr;
}

let range  = wt.reduce((acc, ele)=> {
        return acc+ele
},0)
let max = await SSPTDA(wt, n, range);
let min = 0;

let vr = max[n].reduce((acc, ele, i)=> {
    if(ele=== true){
        acc.push(i)
    }
    return acc
},[])
console.log(max[n]);

}
dynamicPrograming().then(data => {
    console.log(data);
})


