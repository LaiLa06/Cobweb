/**
         * @param {number[]} nums
         * @param {number} target
         * @return {number[]}
         */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (item + nums[j] == target) {
                return [i, j]
            }
        }
    }
};