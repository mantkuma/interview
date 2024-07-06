

function roman(s){
let romanHash = {
    I:1,
    V:5,
    X :10,
    L:50,
    C:100,
    D:500,
    M:1000
}
let prev=null
return s.split('').reduce((acc, ele)=>{
    if(prev && (romanHash[ele] > romanHash[prev])){
        acc= (acc + ( romanHash[ele] - romanHash[prev]))-romanHash[prev]
        prev=ele
    }else{
        acc= acc+romanHash[ele]
        prev=ele
    }   
    return acc
},0)
}
console.log(roman('MMMDCCXXIV'));
