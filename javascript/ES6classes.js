//Classes in j$
class Employee {
    constructor(name, salary, department, exper) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.experience = exper;
    }
    slogan() {
        return `I am ${this.name} and this is the best company.`;
    }
    joiningyear() {
        return 2021 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }

}
let emp = new Employee("Ali Raza", 320000, "IT", 8);
console.log(emp);
console.log(emp.slogan());
console.log(emp.joiningyear());
// console.log(Employee.add(4,2));
// let emp1 = new Employee("Haider Ali", 32000, "Computer Sceince", 2);
// console.log(emp1);
// console.log(emp1.slogan());
// console.log(emp1.joiningyear());
// console.log(Employee.add(34, 9.3));

//Programmer Class
class Programmer extends Employee {
    constructor(name, salary, department, exper, language, github) {
        super(name, salary, department, exper);
        this.language = language;
        this.github = github;
    }
    favouriteLanguage() {
        if (this.language == 'Python') {
            return "Python";
        }
        else {
            return 'Java$cript';
        }

    }
    static multiply(a, b) {
        return a * b;
    }

}
let prog = new Programmer("Ali Raza", 235000, "WebDevelopment", 4, "Python", "007razajutt@github.com");
console.log(prog);
console.log(prog.favouriteLanguage());
console.log(prog.slogan());
console.log(Programmer.multiply(4,3));