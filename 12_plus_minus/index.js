// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
// Example
// arr = [1,1,0,-1,-1]
// There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, and 2/5 and 1/5 = 0.200000 . Results are printed as:
// 0.400000
// 0.400000
// 0.200000
// Complete the plusMinus function in the editor below.
// plusMinus has the following parameter(s):
// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  arr.map((eachNum) => {
    if (eachNum === 0) {
      zeros++;
    } else if (eachNum > 0) {
      positives++;
    } else {
      negatives++;
    }
  });
  return console.log(
    (positives / arr.length).toFixed(6)+
    "\n"+
    (negatives / arr.length).toFixed(6)+
    "\n"+
    (zeros / arr.length).toFixed(6)
  );
}

const myArr = [-4, 3, -9, 0, 4, 1];
plusMinus(myArr);
