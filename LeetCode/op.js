/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let operationHash = {
        "--X" : -1,
        "X++" : +1,
        "++X" : +1,
        "X--" : -1
    }
    return operations.reduce((acc, ele)=>{
            acc = acc+operationHash[ele]
            return acc;
    }, 0)

};


console.log(finalValueAfterOperations(["++X","++X","X++"]))