// ¡Es hora de poner el árbol de navidad en casa! 🎄
// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
// Si le pasamos el argumento 5, se pintaría esto:

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
// Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

const createXmasTree = (height) => {
  let tree = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    row = "_".repeat(height - i);
    row += "*".repeat(i);
    row += "*".repeat(i - 1);
    row += "_".repeat(height - i);
    tree += row + "\n";
  }
  let trunk = "_".repeat(height - 1);
  trunk += "#" + "_".repeat(height - 1) + "\n";
  trunk += "_".repeat(height - 1);
  trunk += "#" + "_".repeat(height - 1);
  return tree + trunk;
};
console.log(createXmasTree(8));
