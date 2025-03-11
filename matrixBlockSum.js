
// https://leetcode.com/assessment

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
const matrixBlockSum = (mat, k) => {
  const [h, w] = [mat.length, mat[0].length];
  const sum = [];
  for (let y = 0; y < h; ++y) {
    sum[y] = [];
    for (let x = 0; x < w; ++x) {
      sum[y][x] = (
        + mat[y][x]
        - (sum[y-1]?.[x-1] ?? 0)
        + (sum[y-1]?.[x] ?? 0)
        + (sum[y][x-1] ?? 0)
      );
    }
  }
  const res = [];
  for (let y = 0; y < h; ++y) {
    res[y] = [];
    for (let x = 0; x < w; ++x) {
      const ym = Math.min(y + k, h - 1);
      const xm = Math.min(x + k, w - 1);
      res[y][x] = (
        + sum[ym][xm]
        - (sum[y-k-1]?.[xm] ?? 0)
        - (sum[ym][x-k-1] ?? 0)
        + (sum[y-k-1]?.[x-k-1] ?? 0)
      );
    }
  }
  // console.log(mat.reduce((s, a) => s + a.reduce((s, v) => s + v), 0));
  // console.log(sum.map(r => r.join(', ')));
  // return res.map(r => r.join(', '));
  return res;
};


matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 1);
// Output: [[12,21,16],[27,45,33],[24,39,28]]

matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 2);
// Output: [[45,45,45],[45,45,45],[45,45,45]]
