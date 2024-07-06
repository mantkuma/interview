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

function revString2() {
    let statement = "a black fox jumps over the lazy dog";
    let res = '';
    statement.split(" ").forEach( (word)=>{
       res = res+  word.split('').reverse().join('') + " ";
    })
    console.log(res);
}


revString();
revString2();