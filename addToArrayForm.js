
// https://leetcode.com/assessment

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
  let res = num.slice().reverse();
  let c = 0;
  const len = Math.max(res.length, Math.floor(Math.log10(k) + 1));
  console.log(len)
  for (let i = 0; (i < len) || c; ++i) {
    const sum = (res[i] ?? 0) + c + Math.floor(k / 10 ** i) % 10;
    res[i] = sum % 10;
    c = sum >= 10 ? 1 : 0;
  }
  return res.reverse();
};

addToArrayForm([2,7,4], 181);
// [4,5,5]

addToArrayForm([1], 1000);

addToArrayForm([1,2,0,0], 34);
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

addToArrayForm([2,7,4], 181);
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

addToArrayForm([2,1,5], 806);
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
