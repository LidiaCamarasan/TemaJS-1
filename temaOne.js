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

var numarDeCopii = 3;
var numePartener = "Emanuel";
var locatieGeografica = "Italia";
var locMunca = "Programator";

function tellFortune(N, Z, Y, X) {
  console.log(
    `Vei fi un ${X} in ${Y}, casatorit cu ${Z} si vei avea ${N} copii.`
  );
}
tellFortune(numarDeCopii, numePartener, locatieGeografica, locMunca);

console.log("Exercitiul 3:");

var day = "4";

switch (day) {
  case "1":
    console.log("Sunday");
    break;

  case "2":
    console.log("Monday");
    break;

  case "3":
    console.log("Tuesday");
    break;

  case "4":
    console.log("Wednesday");
    break;

  case "5":
    console.log("Thursday");
    break;

  case "6":
    console.log("Friday");
    break;

  case "7":
    console.log("Saturday");
    break;
}
