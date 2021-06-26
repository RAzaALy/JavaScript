//Libarary Class
class Libarary{
    constructor(bookList){
       this.bookList=bookList;
       this.issuedBooks={};
    }
    getbooklist(){
   this.bookList.forEach(element => {
       console.log(element);
   });
    }
    issueBook(bookname,user){
        if(this.issuedBooks[bookname]==undefined){
            this.issuedBooks[bookname]=user;
        }
        else
        console.log('This book is already issued!');
    }
    returnBook(bookname){
       delete this.issuedBooks[bookname];

    }
}
let lib=new Libarary(["Legand","Drilling C++","Blind Love","Dead Sea"]);
console.log(lib);
console.log(lib.getbooklist());
// lib.issueBook("Legand","Ali");
// lib.returnBook('Legand');
// lib.issueBook('Legand',"haider");


