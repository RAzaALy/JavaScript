//Character Classes in Regular Expression:
let regex = /\waza/;         // \w means word character: _ or alphabet or number
regex = /\w+tt/;              // \w+ means one or more character:
regex = /\WBhai/;            // \W means one non word character:
regex = /\W+Bhai/;          // \W+ more than one non word character:
regex = /number \d999/;    // \d means any one digit :
regex = /number \d+9/;    // \d+ means more than one digit :
regex = /\D999/;         // \D means any non digit :
regex = /\D+999/;       // \D+  means more than one non digit :
regex = /\ska number/;  // \s match whitespace character:
regex = /\s+ka number/;  // \s+ match one or more than one whitespace character:
regex = /\Ska number/;  // \S match non whitespace character:
regex = /\S+ka number/;  // \S+ match one or more than non whitespace character:
regex = /tt\b/;            // \b means word boundary:
//Assertions:
regex = /J(?=u)/;
regex = /J(?!u)/;
let str = "Ra%zaJutt 3 #*@!$Bha seka number 35Jtt999";
let result = regex.exec(str);
console.log(result);
if (regex.test(str)) {
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}