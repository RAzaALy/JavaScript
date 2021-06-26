const proto = {
    slogan: function () {
        return `This is the best company`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}
//This create employee object:
let employee = Object.create(proto);
employee.name = "Ali Raza";
employee.role = "WebDeveloper";
employee.age = 19;
//console.log(employee);
//This is another way to create employee object:
let employee1 = Object.create(proto, {
    name: { value: "Ali Raza", writable: true },
    role: { value: "Programmer" },
    age: { value: 20 }
});
// console.log(employee1);

//Employee Constructor
function Employee(name, department, salary) {
    this.name = name;
    this.salary = salary;
    this.department = department;
}
//slogan
Employee.prototype.slogan = function () {
    return `This is the best company. Regards ${this.name}`;
}
let emp = new Employee("Ali Raza", "IT", 150000);
console.log(emp);
console.log(emp.slogan());

//Programmer Cunstructor
function Programmer(name, department, salary, language) {
    Employee.call(this, name, department, salary);
    this.language = language;
}
//slogan prototype:
Programmer.prototype = Object.create(Employee.prototype);
// manually set the cunstructor:
Programmer.prototype.cunstructor = Programmer;
let programmer = new Programmer("Haider Ali", "Machine Learning", 300000, "Python");
console.log(programmer);
console.log(programmer.slogan());