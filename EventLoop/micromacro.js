console.log(1);
setTimeout(() => console.log(2)); //m;
Promise.resolve().then(() => console.log(3)); // M
Promise.resolve().then(() => setTimeout(() => console.log(4))); //M
Promise.resolve().then(() => console.log(5)); //M
setTimeout(() => console.log(6)); //m
console.log(7); //2

// // [ console.log(4) console.log(6)) console.log(2)) ]  ==>>
// console.log(1)
// console.log(7)
// //P S
//     //P
//         console.log(3)
//         console.log(5)
