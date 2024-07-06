
const dynamicPrograming = async()=>{
let wt = [2,3,7,8,10]
let target =11
// let arr = [3, 34, 4, 12, 5, 2];
// let target=30
let n=wt.length;
const SSP = async(arr, n, sum) => {
    if(sum===0 ){
        return true;
    }
    if(n===0){
        return false
    } 
    if(arr[n-1]<=sum){
            return await SSP(arr, n-1, sum-arr[n-1]) || await SSP(arr, n-1, sum)
    }else{
            return await SSP(arr, n-1, sum)
    }
}
    let data = await SSP(wt, n, target)
    return data;
}
dynamicPrograming().then(data => {
    console.log(data);
})

