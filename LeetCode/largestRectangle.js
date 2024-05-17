/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    return heights((acc,ele,i)=>{
        let width =1;
        let height =ele
        if(height[i+1] && ele<heights[i+1]){
            width=width+1
        }
    },0)
};