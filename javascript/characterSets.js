//Regular Expression:
//Basic Function in RE:
//Metacharachter in RE:
//CharacterSSets in RE:

//Character Sets:->[] 
// Character Sets means that if the character in square bracket [a-z or ade] are present in string then regular expression match:
let regex = /R[a-z]za/;//Can be from a to z:
regex = /R[adk]za/;//can be a,d or k:
regex = /R[^adk]z[ae]/;//can be any character except a,d or k:
regex = /R[a-zA-Z]z[ae0-9][0-9]/;

//Quantifiers:->{}
regex=/Ra{2}za/;//a can occur two times exactly:
regex=/Ra{0,2}za/;//a can occur oto2 times exactly:

//Groupings:we use parenthesis for groupings():
regex=/(Ra){2}za([0-9]j){2}/;
// let str = "RAza7 Bhai";
let str = "Raza Bhai";
    str = "RaRaza3j1j2 Bhai";
let result = regex.exec(str);
console.log(result);
if (regex.test(str)) {
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}