function anagrams(stringA, stringB) {
        stringA = stringA.replace(/[^a-zA-Z ]/g, "").toLowerCase().trim().replaceAll(' ', '');
        stringB = stringB.replace(/[^a-zA-Z ]/g, "").toLowerCase().trim().replaceAll(' ', '')
        return (stringA.split('').sort().join('') )=== (stringB.split('').sort().join('')) ? true : false
        
}
console.log(anagrams("Hello!! Ma ntosh ", "Hello!! Ma ntosh "));

                        // /[^a-zA-Z]/g /[^a-zA-Z]/g  /[^a-zA-z]/g
// function anagrams(stringA, stringB) {
//         stringA = stringA.replace(/[^a-zA-Z ]/g, "").toLowerCase().trim().replaceAll(' ', '');
//         stringB = stringB.replace(/[^a-zA-Z ]/g, "").toLowerCase().trim().replaceAll(' ', '')
//         console.log(stringB);
//         let hhStringA = {}
//         let hhStringB = {}
//         hhStringA = stringA.split('').reduce((acc, ele)=>{
//                if(!acc[ele]){
//                 acc[ele] = 1;
//                }
//                else {
//                 acc[ele] = acc[ele]+1
//                }
//                return acc
//         },{})
//         hhStringB = stringB.split('').reduce((acc, ele)=>{
//                if(!acc[ele]){
//                 acc[ele] = 1;
//                }
//                else {
//                 acc[ele] = acc[ele]+1
//                }
//             return acc
//         },{})
//       if(Object.keys(hhStringA).length!== Object.keys(hhStringB).length){
//         return false;
//       }else{
//             for(let char in hhStringA){
//                 if(hhStringA[char] !== hhStringB[char]) {
//                     return false;
//                 }
//             }
//       } 
//       return true;
// }