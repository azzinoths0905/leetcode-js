/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let counter = 1
    let res = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (counter === 0) {
            counter = 1
            res = nums[i]
            continue
        }

        if (nums[i] === res) {
            counter++
        } else {
            counter--
        }
    }

    return res
};