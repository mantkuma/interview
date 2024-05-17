/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce((acc,ele, index)=>{
        if(ele.includes(x)){
            acc.push(index);
        }
        return acc

    },[])
    
};
let wd = ["abc","bcd","aaaa","cbc"]
let x = 'a';
console.log(findWordsContaining(wd,x))