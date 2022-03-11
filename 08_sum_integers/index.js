// Given an array of integers, find the sum of its elements.
// For example, if the array , arr = [1,2,3] , so return 6.
// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers

function simpleArraySum(array) {
  let result = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    result += array[i + 1];
  }
  return result;
}

function simpleArraySum2(array) {
  return array.reduce((acc, currentValue) => acc + currentValue, 0);
}

const myNumbers = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(myNumbers));
console.log(simpleArraySum2(myNumbers));

