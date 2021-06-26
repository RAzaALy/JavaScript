// 1 . if else stament

// javascript has 5 falsy values

// 0 , "" , undefined , null , NaN ,

var tomorrow = 'rain';

if(tomorrow=='rain'){

    console.log('take  a raincoat')
}

else{
    console.log("no need to take a raincoat .")
}

var year = 1111;
debugger;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("year is a leap", year);
    } else {
      console.log("year is not a leap", year);
    }
  } else {
    console.log("Year is a leap", year);
  }
} else {
  console.log("Year is not a leap", year);
}


var score = 1;

// if(""){
//   console.log('OMG we loss the game')
// }

if(score==1){
  console.log('OMG , we loss the game .')
}

else{
  console.log('We won the Game')
}


const number = 12;
if (number%2==0){
  console.log('Given Number is Even',number)
}

else{
  console.log('Given Number is Odd',number)
}