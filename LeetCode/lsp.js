
let s = "ccd"
let pl = ''
for(let i=1; i<s.length; i++){
    let l = i-1;
    let r = i+1
    while(s[l] != undefined && s[r]!=undefined){
        console.log(s.substring(l,r+1));
        console.log(s.substring(i,r+1));
        console.log(s.substring(l,i));
        if((s.substring(l,r+1) === s.substring(l,r+1).split('').reverse().join('')) && s.substring(l,r+1).length > pl.length)
            {
                pl =s.substring(l,r+1)
            }
        if((s.substring(l,i) === s.substring(l,i).split('').reverse().join('')) && s.substring(l,i).length > pl.length)
            {
                pl =s.substring(l,i)
            }
        if((s.substring(i,r+1) === s.substring(i,r+1).split('').reverse().join('')) && s.substring(i,r+1).length > pl.length)
            {
                pl =s.substring(i,r+1)
                console.log(pl)           
            }
        l=l-1;
        r=r+1
    }
}
console.log(pl)

