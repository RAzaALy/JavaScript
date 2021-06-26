//Cunstructor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {

    add = function (book) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `
        <tr> 
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`
        tableBody.innerHTML += uiString;
    }
    clear = function () {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate = function (book) {
        if (book.name.length > 2 && book.author.length > 2) {
            return true;
        }
        else {
            return false;
        }
    }
    show = function (type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = "Success";
        }
        else {
            boldText = "Error";
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong> ${boldText}</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div> `;
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);

    }
}
//Add Submit eventListner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let funny = document.getElementById('funny');

    let type = document.getElementById('type');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (funny.checked) {
        type = funny.value;
    }
    let book = new Book(name, author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added.');
    }
    else {
        display.show('Error', ' You can not add this book');
    }

}