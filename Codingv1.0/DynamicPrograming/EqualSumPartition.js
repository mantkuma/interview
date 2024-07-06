
const dynamicPrograming = async()=>{
let arr = [1,5,11,5]
let n=arr.length;
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
    let target = arr.reduce((acc,ele)=> {
        return acc+ele
    },0)
    if(target%2===0){
        let data = await SSP(arr, n, target/2)
        return data;
    }  else {
        return false;
    }
}
dynamicPrograming().then(data => {
    console.log(data);
})

