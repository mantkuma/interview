
const dynamicPrograming = async()=>{
let wt = [1,6,11,5]
let n= wt.length;
let Min = [];
const SSP = async(arr, n, currSum, totalSum ) => {
    if(n===0){
        return (totalSum-currSum)-currSum;
    }
    addedSum =  currSum+arr[n-1];
    let data1 = await SSP(arr, n-1, addedSum, totalSum)
    let data2  = await SSP(arr, n-1, currSum, totalSum)
    if(Math.abs(data1)) Min.push(Math.abs(data1));
    if(Math.abs(data1)) Min.push(Math.abs(data2));
        
}

let sum = wt.reduce((acc, ele)=>{
    return acc+ele;
})
await SSP(wt,n, 0, sum, );
return Min.sort((a,b) => a-b)[0]
}


dynamicPrograming().then(data => {
    console.log(data);
})