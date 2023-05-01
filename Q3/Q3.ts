/*
. Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. 

*/
let personName =  `Abiha Munir`;
console.log(`Name : ${personName}`);
console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in uppercase: ${personName.toUpperCase()}`);


let titlecaseName = personName.split(' ');
    for(let i=0; i  < titlecaseName.length; i++){
       titlecaseName[i] = titlecaseName[i].charAt(0).toUpperCase() + titlecaseName[i].slice(1).toLowerCase();

       
}
console.log(titlecaseName.toString().replace(/,/g ,' '));
