// Given an unsorted array arr of size n that contains only non negative integers, 
// find a sub-array (continuous elements) that has sum equal to s. You mainly need to return the left and right indexes(1-based indexing) 
// of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. 
// If no such subarray exists return an array consisting of element -1.

// Input: arr[] = [1,2,3,7,5], n = 5, s = 12
// Output: 2 4
// Explanation: The sum of elements from 2nd to 4th position is 12.


const findSum = (arr, n, s) => {
    startIndex = 0
    sum = 0;
    for(let i = 0; i< n; i++){
        sum = sum+arr[i];
        if(sum == s){
            return [startIndex+1, i+1]
        }else if(sum > s){
            sum =sum-arr[startIndex];
            startIndex = startIndex+1;
            if(sum===s){
                return [startIndex+1, i+1]
            }
            
        }
    }
    console.log(sum)
    return -1;
}

console.log(findSum([7,2,1], 3, 2))
console.log(findSum([1,2,3,4,5,6,7,8,9,10], 10, 15))