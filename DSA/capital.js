function capitalize(str) {
    str = str.split(' ').reduce((acc, ele)=> {
        ele = ele.split('');
        ele[0] = ele[0].toUpperCase()
        ele = ele.join('')
        acc = acc + ele + ' '
        return acc
    } ,'')
    return str.trim();
}
console.log(capitalize("hey love breakfast at bill miller bbq"))