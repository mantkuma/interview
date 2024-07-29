// class Solution {
// public:
//     int removeDuplicates(vector<int>& nums) {
//         cin.tie(0); ios::sync_with_stdio(0);
//         int copyPtr = 0;
//         int pastePtr = 0;
//         int k = 0;

//         while(copyPtr < nums.size()) {
//             if(pastePtr > 0 && nums[copyPtr] == nums[pastePtr-1]) copyPtr++;
//             else {
//                 nums[pastePtr] = nums[copyPtr];
//                 pastePtr++;
//                 k++;
//             }
//         }

//         return k;
//     }
// };
