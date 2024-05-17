
class MinStack {
    constructor(){
    this.stk = []
    this.minst = [];
    this.min = null
    }

    push(val) {
    this.stk.push(val);
    if(this.min === null){
        this.minst.push(val)
        this.min=val;
    } else if(val<this.min){
     this.minst.push(val)
     this.min=val
    }else{
    }
    }

    pop(){
        this.stk.pop();
        this.minst.pop();
    }

    getMin(){
       return this.minst[this.minst.length-1]
    }

    top(){
         return this.stk[this.stk.length-1];
    }

}
let data = []
var obj = new MinStack()
obj.push(2)
console.log(obj.stk)

obj.push(0)
console.log(obj.stk)

obj.push(3)
console.log(obj.stk)

obj.push(3)
console.log(obj.stk)

console.log("getMin > " + obj.getMin());

obj.pop()
console.log(obj.stk)
obj.top()
console.log(obj.stk)
console.log("getMin ** > " + obj.getMin());
console.log(obj.minst)