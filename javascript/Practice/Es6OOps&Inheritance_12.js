console.log("ECMA Script Object Oriented Programming & Inheritence");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  slogan(){
    return `I am ${this.name} and This company is the best`;
  }
  joinIngYear() {
    return `${2021 - this.experience} Joining Year of Your Job in this company`;
  }

  // static method in javascript it work is out of the class . 

  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
  }

  favlang() {
    if (this.language == "python") {
      return "python";
    } else {
      return "Javascript";
    }
  }

  static multiply(a,b) {
      return a*b
  }
}


let harry = new Employee("Hayder Aly", 5, "Programmer");

// console.log(harry);

// console.log(Employee.add(5, 2));

let rohan = new Programmer('Rohan',10 ,'Lays','Go','rohien3');

console.log(rohan.favlang())

console.log(Programmer.multiply(3,2))
console.log(Programmer.add(3,2))
console.log(Employee.add(3,2))


console.log(rohan.joinIngYear())
console.log(rohan.slogan())





// class Person{
//   constructor(name,role){
//     this.name = name;
//     this.role = role;
//   }

//   data(){
//     console.log(`Person Name is ${this.name} & Person Role is ${this.role}`)
//   }
// }

// class Programmer extends Person{
//   constructor(name,role,languages){
//     super(name,role);
//       this.languages = languages;
//   }
//   data(){
//     console.log(`Programmer Name : ${this.name} & Programmer Languages : ${this.languages}`)
//   }
// }

// const person = new Person('Aly','Constructor')
// const programmer = new Programmer('Hayder','Constructor',['python','javascript'])

// console.log(person.data())
// console.log(programmer.data())
