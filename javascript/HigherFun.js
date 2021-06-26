//Higher Order Function:
// Higher-order Functions are functions that take other functions as arguments or return fucntions as their resutls.
const interQues = (name) => {
    if (name === "raza") {
        return function (topic) {
            console.log(`Hi ${name}. What is ${topic}?.Plz explain us.`);
        }
    }
    if (name === "haider") {
        return function (topic) {
            console.log(`Hi ${name}. What is ${topic}?.Plz explain us.`);
        }
    }
    if (name === "ali") {
        return function (topic) {
            console.log(`Hi ${name}. What is ${topic}?.Plz explain us.`);
        }
    }
    else {
        return function () {
            console.log("Welcome to Interview.");
        }
    }
}
// interQues("raza")("UI & UX");
// interQues("haider")("Python");
// interQues("raza")("React is a libarary or framework");

const cand1 = interQues("raza");
cand1("full stack developer");
cand1("React");
cand1("java$cript hoisting");