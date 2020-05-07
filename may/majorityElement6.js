/*Majority Element
Solution
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2 */


/*
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    let arr = [...new Set(nums)]
   let j = 0,max = 0,ans =0 
    for(let i=0;i<arr.length;i++){
       let count = 0
     for(let j=0;j<nums.length;j++){
        if(arr[i] === nums[j]){ 
         count++     
      }
      if(count > max) { 
      max = count
     ans = arr[i]
      }}}
   return ans
   }

console.log(majorityElement[1,2,3,4,3,3,3,3,3])

