// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// 1-The elements of the first array are all factors of the integer being considered
// 2-The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

const getTotalX = (arr1, arr2) => {
  let numbersBetweenSets = [];
  for (let i = 1; i <= 100; i++) {
    let possibleNumbersFirstCondition = [];
    for (let j = 0; j < arr1.length; j++) {
      if (i % arr1[j] !== 0) {
        break;
      } else {
        possibleNumbersFirstCondition.push(i);
      }
    }
    if (possibleNumbersFirstCondition.length === arr1.length) {
      let possibleNumbersSecondCondition = [];
      for (let k = 0; k < arr2.length; k++) {
        if (arr2[k] % i !== 0) {
          break;
        } else {
          possibleNumbersSecondCondition.push(i);
        }
      }
      if (possibleNumbersSecondCondition.length === arr2.length) {
        numbersBetweenSets.push(i);
      }
    }
  }
  return numbersBetweenSets.length;
};

console.log(getTotalX([2, 6], [24, 36]));
console.log(getTotalX([2, 4], [16, 32, 96]));
