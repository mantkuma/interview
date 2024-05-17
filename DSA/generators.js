function *numbers(){
yield 1
yield 2
yield 1
yield 2
yield 1
yield 2
yield 1
yield 2
}
const generator = numbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());