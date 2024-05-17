
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return sentences.reduce((acc,ele)=>{
        acc= Math.max(acc, ele.split(" ").length)
        return acc;
    }, 0)
};

let sentence = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentence))