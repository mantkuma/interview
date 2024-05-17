let s = "abcabcbb"
let charset = new Set([]);
let res =  charset.size;
let l =0;
for(let i =0 ; i<s.length; i++){
    while(charset.has(s[i])){
        charset.delete(s[l]);
        l=l+1;
    }
    charset.add(s[i]);
    console.log(charset)

    console.log(res)
    res = res > charset.size ? res : charset.size
}


console.log(res) 