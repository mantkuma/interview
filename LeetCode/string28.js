/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
 for(let i=0; i<=haystack.length-needle.length;i++){
    console.log(haystack.slice(i,i+needle.length));
    console.log(needle);
    console.log("'''''''");
        if((haystack.slice(i,i+needle.length)) === needle){
            return i
        }
 }
 return -1
};



console.log(strStr("baaa", "aaa"))