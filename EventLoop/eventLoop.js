console.log("NodeJs Event Loop")
console.log("hello this the is poll phase")
console.log("poll_1")
console.log("poll_2")
console.log("poll_3")
console.log("ahh it a timer: please wait to complete this queue")
setTimeout(() => {
    console.log('timer complete and i am executed');
  }, 1000);
console.log("ahh it a check phase: waiting the poll to be exuasted or idle")
setImmediate(() => {
    console.log('timer poll phase was blank so i have executed');
  });
console.log("poll_4")
console.log("poll_5")
console.log("poll_6")
