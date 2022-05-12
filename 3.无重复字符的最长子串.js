/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  console.log(s.length);
  let temp = "";
  function handleCal(min = 0, max = s.length - 1) {
    for (let i = min; i < max; i++) {
      if (temp.indexOf(s[i]) == -1) {
        temp += s[i];
      } else {
        handleCal(i);
      }
      break;
    }
  }
  console.log(temp);
  handleCal();
//   return temp.length; 
  return 4444
};
// @lc code=end
