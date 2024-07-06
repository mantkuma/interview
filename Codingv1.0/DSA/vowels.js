// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
function vowels(str) {
const matched = str.match(/[aeiou]/gi);
   return  matched ? matched.length : 0
}

console.log(vowels('Why do you ask') );



// function vowels(str) {
//        str = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().trim().replaceAll(' ', '').toLowerCase();
//     let hash = {}
//     hash = str.split('').reduce((acc, ele)=>{
//         if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u')
//             if(!acc[ele]){
//                 acc[ele] = 1;
//                 if(acc['total']){
//                     acc['total'] = acc['total'] + 1
//                 }else {
//                     acc['total'] = 1;
//                 }
//             }else {
//                 acc[ele] = acc[ele]+1;
//                 acc['total'] = acc['total'] +1;
//             }
//             return acc;
//     },{})
//    console.log(hash);
// }