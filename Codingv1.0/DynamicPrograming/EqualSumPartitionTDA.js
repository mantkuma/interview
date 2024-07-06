const dynamicPrograming = async()=>{
let wt = [1,5,11,5]
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
    return arr[n][target/2];
}



let target = wt.reduce((acc, ele)=>{
    return acc+ele
},0)
if(target%2===0){
let res = await SSPTDA(wt, n, target/2);
return res;
} else{
    return false;
}


}
dynamicPrograming().then(data => {
    console.log(data);
})

