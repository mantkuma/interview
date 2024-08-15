const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fullfilled with 1000 Sec");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fullfilled with 2000 Sec");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fullfilled with 3000 Sec");
  }, 3000);
});

const promise4 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "reject in 100 sec")
);

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Reject with 0 Sec");
//   }, 0);
// });

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([promise1, promise2, promise4])
  .then((values) => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled([promise1, promise2, promise4])
  .then((values) => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log("race...");
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });
