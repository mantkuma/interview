const arr = [1,2,3,4,1,1,2,3,4,5,6,7 ]
const aa ={};
arr.forEach((ele) => {
        if(aa[ele]){
            aa[ele] = aa[ele]+1;
        } else {
            aa[ele] = 1;
        }
})
console.log(aa);