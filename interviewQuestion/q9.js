// add number greter that 3 but less than 10
let data = [1, 2, 3, 4, 5, 12, 8, 9].reduce((acc, data) => {
    if (data > 3 && data < 10)
        acc = acc + data;
    return acc;
}, 0)
console.log(data);
