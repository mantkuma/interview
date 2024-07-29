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

console.log(RemoveDuplicatesFromArray([{ a: "10", b: null }]));
console.log(RemoveDuplicates({ a: "10", b: null }));
