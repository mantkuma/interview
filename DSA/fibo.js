const hash = {}
function fib(n) {
    if(hash[n]){
     return hash[n];
    }
    if(n<2){
        return n;
    }
    let res =  fib(n-1) + fib(n-2)
    hash[n] = res; 
    return res;
}
console.log(fib(20))
//console.log(hash);





// arr=[0,1]
// function fibo(n){
//     if(n>1){
//         arr.push(arr[arr.length-1] + arr[arr.length-2])
//         fibo(n-1)
//     }
// }
// fibo(7);
// console.log(arr);






// arr=[0,1];
// function fibo(n){
//     arr.push(arr[arr.length-1] + arr[arr.length-2])
//     while(n>0){
//         fibo(n-1)
//     }
// }
// fibo(3);
// console.log(arr);


// function fibo(n){
//     arr=[];
//     arr.push(0);
//     arr.push(1);
//     while(arr.length <= n){
//         arr.push(arr[arr.length-1] + arr[arr.length-2])
//     }
//     console.log(arr);

// }

// function fibo(n){
//     let arr=[];
//     let val1 = 0;
//     let val2 = 1;
//     arr.push(val1);
//     arr.push(val2);
//     while (val2 < n){
//         let temp = val2;
//         val2=val1+val2
//         val1= temp;
//         arr.push(val2);
//     }
//     console.log(arr);

// }