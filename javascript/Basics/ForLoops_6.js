// Rules For ForLoop

// for(initializer;condition;iteration){

//     code to be executed
// }

for (var num = 0; num <= 10; num++){
  console.log(num);
}

// 1 . table

var num = 5;
for (var x = 1; x <= 10; x++) {
  console.log(`${num} * ${x} = ${num * x}`);
}

// var y = 1;
// while (y<=10) {
//     console.log(`${num} * ${y} = ${num*y}`);
//     y++;
// }

// do {
//     console.log(`${num} * ${y} = ${num*y}`)
//     y++;
// } while (y<=10);

// 2 . prime number

var number = 4;
var count = 0;

if (number < 2) {
  console.log("not a prime number");
  count++;
} else {
  var count = 0;
  for (var x = 2; x < number; x++) {
    if (number % x == 0) {
        count++;
        console.log("Not a prime number");
        break;
    }
  }
}

if(count==0){
    console.log(`Number is prime .`)
}
