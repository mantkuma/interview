// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};

let address = "255.100.50.0"
console.log(defangIPaddr(address));