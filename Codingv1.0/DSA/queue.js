class Queue {
    constructor(){
    this.data = [];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(){
        this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1]
    }
}

function weave(sourceOne, sourceTwo){
    let res = new Queue();
    while(sourceOne.peek() ||  sourceTwo.peek()){
        if(sourceOne.peek() && sourceTwo.peek()){
        res.add(sourceOne.peek());
        res.add(sourceTwo.peek());
        sourceOne.remove();
        sourceTwo.remove();
        }else if(sourceOne.peek()){
        res.add(sourceOne.peek());
        sourceOne.remove();
        }else if(sourceTwo.peek()){
        res.add(sourceTwo.peek());
        sourceTwo.remove();
        }
    }
    return res;
}

let queue1 = new Queue();
    queue1.add("hi");
    queue1.add("hello")
    queue1.add("bye")
    queue1.add("mantosh")

let queue2 = new Queue();
    queue2.add("rahul");
    queue2.add("ramesh")
    queue2.add("rajesh")
console.log(queue1.data);
console.log(queue2.data)
console.log(weave(queue1, queue2).data);