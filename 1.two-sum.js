/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = new Map()

    for (let i in nums) {
        const expect = target - nums[i]
        if (hash.has(expect)) {
            return [i, hash.get(expect)]
        } else {
            hash.set(nums[i], i)
        }
    }
};