let userName = "Bryan";
userName !=="" ? console.log(`Hello ${userName}. `) :  console.log('Hello!');
let userQuestion = "";
console.log(`Hi, ${userName}, you asked, ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 7);
let eightBall = "";
switch (randomNumber) {
  case 0:
  console.log('It is certain');
    break;
   case 1:
  console.log('It is decidedly so');
    break;
     case 2:
  console.log('Reply hazy try again');
    break;
     case 3:
  console.log('Cannot predict now');
    break;
     case 4:
  console.log('Do count on it');
    break;
     case 5:
  console.log('My sources say yes');
    break;
     case 6:
  console.log('Outlook not so good');
    break;
     case 7:
  console.log('Signs point to yes');
    break;
   default:
    console.log('Invalid item');
    break;

}