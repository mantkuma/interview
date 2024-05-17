var searchMatrix = function(matrix, target) {
    let nums=[]
    let m = matrix[0].length-1
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0] <= target && matrix[i][m] >= target ){
            nums = matrix[i];
            i=matrix.length;
        }
    }
    if(nums.length){
    let l =0;
    let h= nums.length-1;
    while (l<=h){
        let mid =  (Math.floor((h+l)/2));
        if(nums[mid] === target) return true;
        if(nums[mid] > target){
            h=mid-1
        }else {
            l=mid+1
        }
        
    }
    return false
    }else{
            return false
    }

}
//console.log(Math.ceil(4.5))
 console.log(searchMatrix([[1],[3]], 3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))