// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.
// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:
// Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta",
    },
  },
};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

// Buscamos en JSON: funciona pero no podemos asegurar que el true sea para un valor y no para una propiedad
const contains = (store, objToFind) => {
  const storeJSON = JSON.stringify(store);
  return storeJSON.includes(objToFind);
};

// Opción con recursividad: caso base: el store[prop] === objeto a buscar
const contains2 = (store, objToFind) => {
  // Caso base para parar la recursividad
  if (store === objToFind) {
    return true;
  }
  // Array de valores del objeto
  if (typeof store === "object") {
    const values = Object.values(store);
    for (const value of values) {
      // Hasta que la función no devuelva true, seguimos iterando por todos los valores
      if (contains(value, objToFind)) {
        return true;
      }
    }
  }
  // Si sale del bucle for entonces el valor no existe y devolverá false
  return false;
};

console.log(contains(almacen, "camiseta"));
console.log(contains(otroAlmacen, "gameboy"));
console.log(contains2(almacen, "camiseta"));
console.log(contains2(otroAlmacen, "gameboy"));
