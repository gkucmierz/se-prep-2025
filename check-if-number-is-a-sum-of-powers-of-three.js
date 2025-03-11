
// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = n => {
  const powers = [];
  for (let i = 0; i <= 16; ++i) {
    powers[i] = 3 ** i;
  }
  for (let i = powers.length-1; i >= 0; --i) {
    n -= powers[i];
    if (n < 0) {
      n += powers[i];
    }
    if (n === 0) return true;
  }
  return false;
};

checkPowersOfThree(12);
// Output: true
// Explanation: 12 = 31 + 32
checkPowersOfThree(91);
// Output: true
// Explanation: 91 = 30 + 32 + 34
checkPowersOfThree(21);
// Output: false
// 
