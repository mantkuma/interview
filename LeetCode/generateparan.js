/**
 * @param {number} n
 * @return {string[]}
 */



var generateParenthesis = function(n) {
    let res = [];
    let s='(';
    generate = function(s, openN, closeN){
    if(openN===n && closeN===n){
        res.push(s);
    }
    if(openN<n){
        let p=s+'('
        this.generate(p, openN+1, closeN)
    }
    if(closeN<openN){
        let p=s+')'
        this.generate(p, openN, closeN+1)
    }
    }  
    this.generate(s, 1, 0) 
    return res;
};

console.log(generateParenthesis(3))
