class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    size(){
        let count=0;
        let node = this.head
        while(node){
            node=node.next
            count++
        }
        return count;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head){
            return null;
        }
        let node= this.head;
        while(node){
        if(!node.next) return node
          node=node.next      
        }
    }
    clear(){
        this.head=null;
    }
    removeFirst(){
        let node = this.head;
        this.head= node.next;
    }
    removeLast(){
        if(!this.head){
            return
        }
        let node= this.head;
        if(!node.next){
            this.head=null
        }
        while(node){
            if(!((node.next).next)){
                node.next =null
                return;
            }   
         node=node.next
        }
    }
}

let list = new LinkedList();
list.insertFirst("a")
list.insertFirst("b")
list.insertFirst("c")
list.insertFirst("d")
list.insertFirst("e")
console.log(list.size());
console.log(list.getLast());
list.removeLast()
console.log(list.getLast());