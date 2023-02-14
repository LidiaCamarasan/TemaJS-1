console.log("ex. 1:");
var a = 100;
var b = 10;

if (a % b === 0) console.log("true");
else console.log("false");

console.log("ex. 2:");

var x = 100;
var y = 23;

if (x % y === 0) console.log("true");
else console.log("false");

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

var day = "5";

switch (Day) {
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
