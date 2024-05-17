let strs = ["abaddd" , "abaccc", "abapp"]
let prefix = strs[0];
 for(let i = 1; i<strs.length; i++){
    console.log(strs[i].indexOf(prefix));
    while(strs[i].indexOf(prefix)!=0){
        prefix = prefix.substring(0,prefix.length-1)
        console.log(prefix);
    }
 }
 console.log(prefix);
// let prefix = "aba"
// console.log(strs[1].indexOf(prefix));