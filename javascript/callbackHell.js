const student = [
  { name: "Ali Raza", subject: "Java $cript" },
  { name: "Haider Ali", subject: "Python" },
  { name: "Raza", subject: "WebDevelopment" },
];
function enrollStudent(stud) {
  setTimeout(() => {
    student.push(stud);
    console.log("student enrolled");
    setTimeout(function () {
      student.forEach(function (stud) {
        console.log(stud.name);
      });
      console.log("student fetched");
      setTimeout(function () {
        student.forEach(function (stud) {
          console.log(stud.subject);
        });
        console.log("subject fetched");
      }, 2000);
    }, 2000);
  }, 2000);
}
let newStudent = { name: "Jutt007", subject: "Machine learning" };
enrollStudent(newStudent);
