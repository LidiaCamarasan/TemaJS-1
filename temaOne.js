console.log("Exercitiul 1:");

const numarDivizibilCuZece = (numar) => {
  if (numar % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(numarDivizibilCuZece(100));
console.log(numarDivizibilCuZece(23));

console.log("Exercitiul 2:");

let numarDeCopii = 3;
let numePartener = "Emanuel";
let locatieGeografica = "Italia";
let locMunca = "Programator";

function tellFortune(N, Z, Y, X) {
  console.log(
    `Vei fi un ${X} in ${Y}, casatorit cu ${Z} si vei avea ${N} copii.`
  );
}
tellFortune(numarDeCopii, numePartener, locatieGeografica, locMunca);

console.log("Exercitiul 3:");

const weekDay = (dayNumber) => {
  let day = "";

  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;

    case 2:
      day = "Monday";
      break;

    case 3:
      day = "Tuesday";
      break;

    case 4:
      day = "Wednesday";
      break;

    case 5:
      day = "Thursday";
      break;

    case 6:
      day = "Friday";
      break;

    case 7:
      day = "Saturday";
      break;
  }
  return day;
};
console.log(weekDay(4));
