
var getSmallestPrev = function(arr){
    let stack=[]
    let res=[]
    for(i=0;i<arr.length;i++){
        if(i===0){
            res.push(-1)
            stack.push(arr[i]);
        }else{
            while((stack.length !== 0)&&(stack[stack.length-1] > arr[i])){
            stack.pop()
            }
            if(stack.length === 0){
                res.push(-1)
                stack.push(arr[i])
            }else{
                res.push(stack[stack.length-1])
                stack.push(arr[i])
            }
        }
}
return res;
}
console.log(getSmallestPrev([4,10,5,8,20,15,3,12]));
