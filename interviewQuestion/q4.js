//print output 
/**
 * 5
 * 4
 * 3
 * 2
 * 1
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */

function usingTimeout() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 0);
        if (5 - i != 0)
            console.log(5 - i);
    }
}

usingTimeout()


