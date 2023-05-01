/*
. Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.

*/
var personName = "Abiha Munir";
console.log("Name : ".concat(personName));
console.log("Name in lowercase: ".concat(personName.toLowerCase()));
console.log("Name in uppercase: ".concat(personName.toUpperCase()));
var titlecaseName = personName.split(' ');
for (var i = 0; i < titlecaseName.length; i++) {
    titlecaseName[i] = titlecaseName[i].charAt(0).toUpperCase() + titlecaseName[i].slice(1).toLowerCase();
}
console.log(titlecaseName.toString().replace(/,/g, ' '));
