function chunk(array, size) {
    let crr = 0;
    let acc = [];
    let res = []
    array.map((ele )=> {
                if(crr<size){
                    acc.push(ele);
                    crr= crr+1;
                }else {
                    crr=1;
                    res.push(acc);
                    acc= [];
                    acc.push(ele)
                }
    })
    res.push(acc);
    return res;
    
}
let arr = [1,3,5,6,4,5,6,7,8,9,0,8,7,6,5,4, 5,6,7]
console.log(chunk(arr,8));