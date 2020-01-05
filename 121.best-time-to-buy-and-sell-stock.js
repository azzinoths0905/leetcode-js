/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let price = prices[0]

    for (let p of prices) {
        if (p < price) {
            price = p
        } else if (p - price > profit) {
            profit = p - price
        }
    }

    return profit
};