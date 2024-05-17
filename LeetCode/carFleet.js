/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function(target, position, speed) {
    let hash = {};
    position.forEach((ele, i)=>{
        hash[ele] = i
    })
    position.sort((a,b)=> a-b);
    function getTime(i){
        return (target-(position[i]))/(speed[hash[position[i]]])
        }
    let stack = [];
    if(position.length === 1) return 1
    for(i=position.length-1; i>=0; i--){
            if(stack.length  === 0){
                stack.push(getTime(i));
            }else {
                stack.push(getTime(i))
            }
            if(stack[stack.length-1] <= stack[stack.length-2]){
                    stack.pop();
            }
    }
    return stack.length
       
};



console.log(carFleet(target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]))
console.log(carFleet(target = 100, position = [0,2,4], speed = [4,2,1]))
console.log(carFleet(target = 10, position = [0,4,2], speed = [2,1,3]))