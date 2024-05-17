function printNumber(n) {
    console.log(n);
    n = n - 1;
    if (n > 0) {
        printNumber(n);
        console.log(n+1);
    }
}
printNumber(5);