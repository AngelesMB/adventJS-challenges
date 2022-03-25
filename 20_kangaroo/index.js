// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
// kangaroo has the following parameter(s):
// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns
// string: either YES or NO

const kangaroo = (startingPosA, jumpDistanceA, startingPosB, jumpDistanceB) => {
  let newPosA = startingPosA;
  let newPosB = startingPosB;
  for (let i = 0; i <= 10000; i++) {
    newPosA += jumpDistanceA;
    newPosB += jumpDistanceB;
    if (newPosA === newPosB) {
      return "YES";
    }
  }
  return "NO";
};

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
