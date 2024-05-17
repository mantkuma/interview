function search(nums, target){
    let l =0;
    let h= nums.length-1;
    while (l<=h){
        let mid =  (Math.floor((h+l)/2));
        if(nums[mid] === target) return mid;
        if(nums[mid] > target){
            h=mid-1
        }else {
            l=mid+1
        }
        
    }
    return -1
}
//console.log(Math.ceil(4.5))
 console.log(search([-1,0,3,5,9,12], -1))