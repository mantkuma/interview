const https = require("https");
let response = {};
const getData = async () => {
  return new Promise((resolve, rejects) => {
    https.get(
      "https://coderbyte.com/api/challenges/json/wizard-list",
      (resp) => {
        let data = [];
        resp
          .on("data", function (chunk) {
            data.push(chunk);
          })
          .on("end", function () {
            let buffer = Buffer.concat(data);
            resolve(JSON.parse(buffer.toString()));
          });
      }
    );
  });
};
const compareObject = async () => {};
const getkeys = (obj) => {
  return Object.keys(obj);
};

const RemoveDuplicatesFromArray = (items) => {
  let newItems = [];
  for (ele of items) {
    newItems.push(RemoveDuplicates(ele));
  }
  return newItems;
};
const RemoveDuplicates = (items) => {
  let obj = getkeys(items);
  obj.forEach((ele) => {
    if (items[ele] == null || items[ele] === "") {
      delete items[ele];
    }
  });
  return items;
};

const start = async () => {
  let data = await getData();
  let resp = data.reduce((acc, item) => {
    let obj = getkeys(item);
    obj.forEach((ele) => {
      if (typeof item[ele] == "object") {
        x;
      }
    });
    acc.push(item);
    return acc;
  }, []);
  return resp;
};

start();
