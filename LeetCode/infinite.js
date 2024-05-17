let n=10
while(n>0){
    console.log(n)
   setTimeout(()=>{
    const y = n+1;
    console.log(y);
   },2)
   n--;
}