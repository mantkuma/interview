let s = "aadbabacedef"
let res = "";
let resLen = 0
for(let i =0; i<s.length; i++){
    let l, r = i
    while(l>0 && r<s.length && s[l]=== s[r]){
        res = s.substring(l,r+1);
        resLen = res.length;
        l= l-1;
        r=r-1
    }
    l,r = i,i+1
     while(l>0 && r<s.length && s[l]=== s[r]){
        res = s.substring(l,r+1);
        resLen = res.length;
        l= l-1;
        r=r-1
    } 
}
console.log("result");
console.log(res);