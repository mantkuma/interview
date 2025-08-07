class PQueue {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }

  top() {
    return this.queue[this.queue.length - 1];
  }

  print() {
    console.log(this.queue);
  }
  isEmpty() {
    return this.queue.length === 0;
  }

  len() {
    return this.queue.length;
  }

  push(value) {
    this.queue.push(value);
  }
  pop() {
    return this.queue.pop(); // removes the last element
  }

  shift() {
    return this.queue.shift(); // removes the first element
  }
  unshift(value) {
    this.queue.unshift(value); // adds the value to the front
  }
}

const pq = () => {
  let arr = [7, 10, 4, 3, 20, 15];
  let k = 5; // # smallest Element
  let pQueue = new PQueue(k);
  for (let i = 0; i < arr.length; i++) {
    pQueue.print();
    if (pQueue.len() === 0) {
      pQueue.push(arr[i]);
    } else {
      if (pQueue.top() < arr[i] && pQueue.len() < k) {
        pQueue.push(arr[i]);
      } else if (arr[i] < pQueue.top()) {
        if (pQueue.len() === k) {
          pQueue.pop();
        }
        pQueue.unshift(arr[i]);
      }
    }
  }

  console.log(pQueue.top());
};

pq();
