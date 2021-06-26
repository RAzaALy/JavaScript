//Generators in j$:
function* numbersGen() {
    let i = 1;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while (true) {
        yield i++;
        // yield (i++).toString();
    }
}
const num = numbersGen();
// console.log(num);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);