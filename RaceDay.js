let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge =14;
if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000;
  console.log(`Hello Runner, your race will start at 9:30 am.  This is your race number, ${raceNumber}`);
} else if (runnerAge > 18 && registeredEarly !== true ){
console.log(`Hello Runner, your race will start at 11:30 am.  This is your race number, ${raceNumber}`);
} else if (runnerAge < 18 ){
console.log(`Hello Runner, your race will start at 12:30 am.  This is your race number, ${raceNumber}`);
} else (runnerAge === 18)
console.log ('Hello Runner, please see the registration desk, thank you');


