var reverseWords2 = function(s) {
    s= s.trim().replaceAll(" ", ".")
    s= s.split('.').reduce((acc, ele)=>{
        if(ele !== ''){
            acc.unshift(ele+ " ")
        }
        return acc
    },[])
    return s.join('').trim();

}
var reverseWords = function(s) {
    s = s.trim()
    const arr = s.split(/\s+/)
    return arr.reverse().join(' ')
}
console.log(reverseWords("hello  sdsdsf     world"))