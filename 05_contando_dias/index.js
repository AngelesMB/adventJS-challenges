// // Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
// Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
// El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.
// ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -).
// Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2022.

const daysToXmas = (date) => {
  const xmasDay = new Date("Dec 25, 2022");
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const xmasDayInMilliseconds = Date.UTC(
    xmasDay.getFullYear(),
    xmasDay.getMonth(),
    xmasDay.getDate()
  );
  const dateInMilliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  return Math.floor(
    (xmasDayInMilliseconds - dateInMilliseconds) / millisecondsPerDay
  );
};

console.log(daysToXmas(new Date()));
console.log(daysToXmas(new Date("Dec 1, 2022")));
console.log(daysToXmas(new Date("Dec 24, 2022 00:00:01")));
console.log(daysToXmas(new Date("Dec 24, 2022 23:59:59")));
console.log(daysToXmas(new Date("Dec 25, 2021")));
console.log(daysToXmas(new Date("Dec 25, 2022")));
console.log(daysToXmas(new Date("Dec 26, 2022")));
console.log(daysToXmas(new Date("Jan 1, 2023 00:00:01")));
