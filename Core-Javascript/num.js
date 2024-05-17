(function(){
 let num = 5;  
const print = function(n){ 
    if(n===0) return; 
    console.log(n)
    print(n-1);
    if(n>1){
        console.log(n);
    }
}
  print(num);  
})();