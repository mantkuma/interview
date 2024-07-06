// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    res=''
    let column = n*2-1
    let mid =  Math.ceil(column/2)-1;
    for(let row=0;row<n;row++){
        for(col=0; col<column;col++){
            if(col>=mid-row && col<=mid+row){
                res = res+'#'
            }else {
                res=res+' '
            }
        }
        console.log(res);
        res='';
    }
}

pyramid(3);
