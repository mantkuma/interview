class Stack {
    constructor(){
        this.data = [];
    }
    add(val){
        this.data.push(val);
    }
    remove(){
        this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1]
    }
}
let stack1 = new Stack();
    stack1.add("hi");
    stack1.add("hello");
    stack1.add("how");
    stack1.add("hey");
let stack2 = new Stack();
    stack2.add("bye")
    stack2.add("byebye")
    stack2.add("goodbye")
    stack2.add("gobyebye")
console.log(stack1.data);
stack1.remove();
console.log(stack1.data);
stack1.remove();
console.log(stack1.data);
stack2.remove();
console.log(stack2.data);
stack2.remove();
console.log(stack2.data);
stack2.remove();