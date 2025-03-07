
// https://www.tryexponent.com/courses/software-engineering/swe-practice/move-zeros-to-end-of-array-practice

const moveZerosToEnd = arr => {
  const len = arr.length;
  let si = -1;
  for (let di = 0; di < len; ++di) {
    if (arr[di] === 0) {
      si = Math.max(si + 1, di + 1);
      for (; si < len; ++si) {
        if (arr[si] !== 0) {
          arr[di] = arr[si];
          arr[si] = 0;
          break;
        }
      }
    }
  }
  return arr;
};


moveZerosToEnd([0, 1, 0, 3, 12]);
// output: [1, 3, 12, 0, 0]

moveZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]);
// output: [1, 2, 4, 3, 5, 0, 0, 0]

moveZerosToEnd([1]);
// output: [1]

moveZerosToEnd([0, 0, 1]);
// output: [1, 0, 0]
