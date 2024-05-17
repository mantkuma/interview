///Set
function uniqueArray1(array) {
        var newSet= new Set(array);
            var newArray = Array.from(newSet);
        return newArray;
}
//filter
function uniqueArray2(arr){
        var newSet = arr.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        })
        return newSet;
}
var arr1 = [1,5,2,4,1,6]
var arr2 = [1,5,2,4,1,6]
console.log(uniqueArray1(arr1));
console.log(uniqueArray2(arr2));