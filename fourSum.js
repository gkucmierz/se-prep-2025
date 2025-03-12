

const removeRedundancy = (arr, maxSum) => {
  const maxLimit = 4;
  const map = new Map();
  arr.map(n => {
    const cnt = map.get(n) ?? 0;
    map.set(n, cnt + 1);
  });
  const res = [];
  [...map].map(([val, cnt]) => {
    const maxRep = Math.ceil(Math.abs(maxSum/val));
    const maxReps = Math.max(0, Math.min(cnt, maxRep));
    const reps = cnt > maxLimit ? maxReps : cnt;
    const arr = Array(reps).fill(val);
    res.push(...arr);
  });
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  nums = removeRedundancy(nums, target);
  const set = new Set();
  const len = nums.length;
  for (let a = 0; a < len; ++a) {
    for (let b = a + 1; b < len; ++b) {
      for (let c = b + 1; c < len; ++c) {
        for (let d = c + 1; d < len; ++d) {
          const sum = nums[a] + nums[b] + nums[c] + nums[d];
          if (sum !== target) continue;
          const s = [nums[a], nums[b], nums[c], nums[d]].sort((a, b) => a-b)
          set.add(s.join(';'));
        }
      }
    }
  }
  return [...set].map(q => {
    return q.split(';').map(n => +n);
  });
};

// const arr1 = [7,-8,-7,2,-7,-7,10,-6,10,-9,2,-7,-4,-7];
// removeRedundancy(arr1, -22);
// [[-9,-8,-7,2]]

// removeRedundancy([2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3], 8);

// fourSum([-5,5,4,-3,0,0,4,-2], 4);

// fourSum([-2,-1,-1,1,1,2,2], 0);
// [[-2,-1,1,2],[-1,-1,1,1]]

// fourSum([1,0,-1,0,-2,2], 0);
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// fourSum([2,2,2,2,2], 8);
// Output: [[2,2,2,2]]
