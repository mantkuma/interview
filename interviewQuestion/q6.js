//output infinite 1

let n = 1;
function print() {
    console.log(n);
    setTimeout(() => {
        n = 0
    }, 0);
}
while (n) {
    print();
}