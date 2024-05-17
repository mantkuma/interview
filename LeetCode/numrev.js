var addTwoNumbers = function(l1, l2) {
    let _l3 = parseInt(l1.reverse().join(''))+parseInt(l2.reverse().join(''))
    _l3 = _l3.toString().split('').reverse();
    _l3 = _l3.map(Number)
    return _l3
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))