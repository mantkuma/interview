//  ### 
//  ##
//  #
function patt(n){
let p=n;
let time=1000;
 while(p--){
    time = time-1;
    let x='#';
    for(let i=0;i<p;i++){
        x=x+'#'
    }
    let q= n-p-1;
    while(q--){
        x=x+' '
    }
     setTimeout(()=>{
        console.log(x);
     }, time)

 }
}
patt(4);