
const dynamicPrograming = async()=>{
let wt = [6,44,30,25,8,26,34,22,10,18,34,8,0,32,13,48,29,41,16,30]
let n= wt.length;
let Min = [];
let target = 12;
result =0;
const SSP = async(arr, n, currSum, totalSum ) => {
    if(n===0){
        return (totalSum-currSum)-currSum;
    }
    addedSum =  currSum+arr[n-1];
    let data1 = await SSP(arr, n-1, addedSum, totalSum)
    let data2  = await SSP(arr, n-1, currSum, totalSum)
    if(Math.abs(data1) || data1 === 0) Min.push(data1);
    if(Math.abs(data1)|| data1 === 0) Min.push(data2);
        
}

let sum = wt.reduce((acc, ele)=>{
    return acc+ele;
})
await SSP(wt,n, 0, sum, );
let res =  Min.reduce((acc,ele)=> {
        if(ele === target){
            acc= acc+1;
            return acc;
        }else {
            return acc;
        }
},0)
console.log(Min)
return res;
}


dynamicPrograming().then(data => {
    console.log(data);
})