// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24 . The function prints
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  });
  const minSumArr = sortedArr.slice(0, sortedArr.length - 1);
  const maxSumArr = sortedArr.slice(1, sortedArr.length);
  const minSum = minSumArr.reduce((acc, nextPos) => acc + nextPos, 0);
  const maxSum = maxSumArr.reduce((acc, nextPos) => acc + nextPos, 0);
  return console.log(minSum, maxSum);
}

const myNumbers = [5, 4, 2, 1, 3];

miniMaxSum(myNumbers);
