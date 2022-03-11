// Staircase detail
// This is a staircase of size n = 4 :
// #...
// ##..
// ###.
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .
// Function Description
// Complete the staircase function in the editor below.
// staircase has the following parameter(s):
// int n: an integer

function printStaircase(height) {
  let staircase = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    row += " ".repeat(height - i) + "#".repeat(i) + "\n";
    staircase += row;
  }
  return console.log(staircase);
}

const myHeight = 7;

printStaircase(myHeight);
