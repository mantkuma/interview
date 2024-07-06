function maxChar(str) {
    let max= 0;
    let ch = ''
     const hash = str.split('').reduce((hh, ele)=>{
            if(!hh[ele]){
                hh[ele] = 1
                if(max < 1) {
                    max=1;
                    ch = ele    
                }
            }else {
                hh[ele] = hh[ele]+1;
                if(max < hh[ele]){
                    max=hh[ele];
                    ch = ele
                }
            }
            return hh;
     },{})
     console.log(hash)
     console.log(ch);
    }
maxChar("trhgytggggtgggggggfdftythj")
