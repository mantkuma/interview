/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.replaceAll('()', 'o')
    command = command.replaceAll('(', '')
    command = command.replaceAll(')', '')
    return command;
};


let str = "(al)G(al)()()G" 
console.log(interpret(str));