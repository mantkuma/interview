// reverse string
//output siht si a tset tnemetats 
function revString() {
    let statement = "this is a test statement";
    let res = '';
    statement.split(" ").forEach( (word)=>{
       res = res+  word.split('').reverse().join('') + " ";
    })
    console.log(res);
}
revString();