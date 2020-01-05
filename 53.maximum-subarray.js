/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0
    let res = nums[0]

    for (let num of nums) {
        if (sum < 0) {
            sum = num
        } else {
            sum += num
        }
        res = Math.max(sum, res)
    }

    return res
};