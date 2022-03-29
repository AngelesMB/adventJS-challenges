// Given a list of numbers, print the most frequent element.
// Note : If the frequency of some elements is the same, then print the smallest of them.

const findMostFrequent = (arr) => {
  const myNumbers = {};
  for (let i = 0; i < arr.length; i++) {
    if (!myNumbers[arr[i]]) {
      myNumbers[arr[i]] = 1;
    } else {
      myNumbers[arr[i]]++;
    }
  }
  const numberValues = Object.values(myNumbers);
  const mostFrequentElem = Math.max(...numberValues);
  const mostFrequentNumbers = [];
  for (const key in myNumbers) {
    if (myNumbers[key] === mostFrequentElem) {
      mostFrequentNumbers.push(key);
    }
  }
  const mostFrequentSmallest = mostFrequentNumbers
    .sort((a, b) => a - b)
    .shift();
  return console.log(mostFrequentSmallest);
};

findMostFrequent([6, 4, 2, 5, 5, 5, 2, 4, 7, 7, 7, 7, 1, 1, 1, 1]);
findMostFrequent([6]);
findMostFrequent([1,2,3,4,4,5,5,6,6]);
