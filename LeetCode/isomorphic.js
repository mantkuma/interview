var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    s=s.split('');
    t=t.split('');
    let hash = {}
    let arr = [];
    for(let i=0;i<s.length;i++){
        if(hash[s[i]]){
            if(hash[s[i]] != t[i])  return false;
        }else {
            if(arr.includes(t[i])) return false;
            hash[s[i]] = t[i]
            arr.push(t[i])
        }
    }
    return true;
};



console.log(isIsomorphic('badc', 'baba'))
