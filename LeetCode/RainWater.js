/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l=0;
    let r = height.length-1;
    let Lmax = height[l];
    let Rmax = height[r];
    let waterUnit = 0;
    while(l<r){
       if(Lmax < Rmax){
            l++
            Lmax = Math.max(Lmax,height[l])
            waterUnit = waterUnit + Lmax - height[l]
       }else {
            r--
            Rmax = Math.max(Rmax,height[r])
            waterUnit = waterUnit + Rmax - height[r]
       }
    } 
    return waterUnit;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))