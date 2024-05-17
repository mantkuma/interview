

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stk =[];
    tokens.forEach((ele)=> {
                if(ele === '/'){
                    console.log(parseInt(stk[stk.length-2])/parseInt(stk[stk.length-1]))
                    let eval = Math.floor(parseInt(stk[stk.length-2])/parseInt(stk[stk.length-1]))
                    console.log(eval)
                    stk.pop();
                    stk.pop();
                    stk.push(eval)
                }else if(ele === '+'){
                      let eval = parseInt(stk[stk.length-2])+parseInt(stk[stk.length-1])
                      stk.pop();
                      stk.pop();
                      stk.push(eval)
                }else if(ele === '*'){
                      let eval = parseInt(stk[stk.length-2])*parseInt(stk[stk.length-1]);
                      stk.pop();
                      stk.pop();
                      stk.push(eval)
                }else if(ele === '-'){
                      let eval = parseInt(stk[stk.length-2])-parseInt(stk[stk.length-1]);
                      stk.pop();
                      stk.pop();
                      stk.push(eval)
                } else{
                    stk.push(ele)
                }
                console.log(stk);
    })
    return stk[0]
};




// console.log(evalRPN(["4","13","5","/","+"]))


//console.log((Math.ceil(parseInt('6')/parseInt('-132'))*10)+17)
//console.log(Math.ceil(6/-132))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
//console.log(evalRPN(["4","13","5","/","+"]))
