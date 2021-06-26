const student = [
    { name: "Ali Raza", subject: "Java $cript" },
    { name: "Haider Ali", subject: "Python" },
    { name: "Raza", subject: "WebDevelopment" }
]
function enrollStudent(stud, callback) {
    setTimeout(() => {
        student.push(stud);
        console.log('student enrolled');
        callback();
    }, 1000);
}
function getStudent() {
    setTimeout(function () {
        let str = "";
        student.forEach(function (stud) {
            str += `<li>${stud.name}</li>`;
        });
        document.getElementById('student').innerHTML = str;
        console.log('student fetched');

    }, 3000);
}

let newStudent = { name: "Jutt007", subject: "Machine learning" }
enrollStudent(newStudent, getStudent);
// getStudent();