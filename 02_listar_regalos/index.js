// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const carta = " bici  coche balón _playstation bici coche peluche";

const listGifts = (str) => {
  const strToArr = str.trim().split(" ");
  const giftList = {};
  strToArr.map((eachGift) => {
    if (eachGift && eachGift.charAt(0) !== "_") {
      if (!giftList[eachGift]) {
        giftList[eachGift] = 1;
      } else {
        giftList[eachGift] += 1;
      }
    }
  });
  return giftList;
};

const regalos = listGifts(carta);

console.log(regalos);
