/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= -1
        }
    }

    const res = []
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            res.push(i + 1)
        }
    }
    return res
};
