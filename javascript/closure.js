//closure in j$:
// closure in action that is inner funtion can have access to the outer function variables parameters as well as all the global variables.
let d = 33;
const outerFun = (a) => {
    let b = 8;
    const innerFun = () => {
        let sum = a + b + d;
        console.log(`The Sum of three number is ${sum}`);
    }
    // innerFun();
    return innerFun;
};
let inner = outerFun(3);
// console.log(inner);
console.dir(inner);
inner();
