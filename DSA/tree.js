class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
};

function levelWidth(root) {
   let counter = [];
   let crr=0;
   counter.push(0);
   let arr= [root]
   arr.push("stop");
   while(arr.length){
     let node = arr.shift()
     counter[crr]++;
     if(node.children){
        arr.push(...node.children)
     }
     if(arr[0] === "stop"){
        arr.shift()
        if(arr.length){
            arr.push("stop")
            counter.push(0);
            crr++;
        }
     }
   }
   return counter

}

  const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  console.log(levelWidth(root));