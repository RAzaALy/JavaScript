console.log("Meta Characters symbol in Regular Expressions:");
let regex = /Raza/;
// Lets look some metacharacter Symbol:
regex = /^R/; //^ symbol means expression will match if string starts with:
regex = /ng$/; //$ symbol means expression will match if string ends with:
regex = /R.za/; //Matches any one character:
regex = /R*za/; //Matches 0 or more character:
regex = /Ra?zai?/; //? mark after character means character is optional:
regex = /R\*aza/; // \* Escape as original character in string:
let str = "R*aza boy and Raza learns Coding";
let result = regex.exec(str);
console.log(result);
if (regex.test(str)) {
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}