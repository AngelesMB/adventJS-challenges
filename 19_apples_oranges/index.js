// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
// In the diagram below:
// The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point b.
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *
// countApplesAndOranges has the following parameter(s):
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

const countApplesAndOranges = (
  startingPoint,
  endingPoint,
  appleTree,
  orangeTree,
  applesDistances,
  orangesDistances
) => {
  let numApples = 0;
  let numOranges = 0;
  for (let i = 0; i < applesDistances.length; i++) {
    const distanceFromTree = appleTree + applesDistances[i];
    if (distanceFromTree >= startingPoint && distanceFromTree <= endingPoint) {
      numApples++;
    }
  }
  for (let i = 0; i < orangesDistances.length; i++) {
    const distanceFromTree = orangeTree + orangesDistances[i];
    if (distanceFromTree >= startingPoint && distanceFromTree <= endingPoint) {
      numOranges++;
    }
  }

  return console.log(numApples + "\n" + numOranges);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
