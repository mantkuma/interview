/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().trim().replaceAll(' ', '');
    console.log(s);
    return s===s.split('').reverse().join('') ? true : false
};


console.log(isPalindrome("0P"))