// Find the area of triangle , circle and rectangle

var area = "triangle";
var PI = 3.14,
  l = 5,
  b = 4,
  r = 3;

// if (area == "circle") {
//   console.log("The area of circle is : " + PI * r ** 2);
// } else if (area == "triangle") {
//   console.log("The area of triangle is : " + (l * b) / 2);
// } else if (area == "rectangle") {
//   console.log("The area of rectangle is : " + l * b);
// } else {
//   console.log("please Enter valid data .");
// }

switch (area) {
  case "circle":
    console.log("The area of Circle is : " + PI * r ** 2);
    break;
  case "triangle":
    console.log("The area of Triangle is : " + (l * b) / 2);
    break;

  case "rectangle":
    console.log("The area of Reactangle is : " + l * b);
    break;
  default:
    console.log("Plz Enter Valied Data");
}

