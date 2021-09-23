var readInput= require('readline-sync');
const chalk = require('chalk');

var userName = readInput.question("What is your name? ");

var score=0;

const correctAns = chalk.green.bold;
const incorrectAns = chalk.red.bold;
const currentScore = chalk.black.bold.bgWhite;
const finalScore = chalk.black.bold.bgCyan;

console.log(chalk.italic.blueBright("Welcome "+ userName + "!!!"));
console.log(chalk.italic.blueBright("Let's see how well do you know our cities"));
console.log(chalk.italic.blueBright("~ ~ ~ ~ ~ ~ ~ ~"));

function play(question,answer){
  var userAnswer = readInput.question(question);

  if (userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(correctAns("You're Right!"));
    score+=1;
  }
  else{
    console.log(incorrectAns("You're Wrong"));
  }
  console.log(currentScore("Your score: "+ score));
  console.log("- - - - - - - ");
}






/**var quesOne = {
  question:"Where does Abhi live? ",
  answer:"Bangalore"
}

var quesTwo = {
  question:"Who is Abhi's favorite Superhero? ",
  answer:"Doctor Strange"
}
**/
var questionsLevelOne = [
  {
    question:"Which city is popularly known as Pink City? ",
    answer:"Jaipur"
  },
  {
    question:"Which city is popularly known as Sun city? ",
    answer:"Jodhpur"
  },
  {
    question:"Which city is popularly known as City of Lakes? ",
    answer:"Udaipur"
  },
  {
    question:"Which city is popularly known as Boston of India? ",
    answer:"Ahmedabad"
  },
  {
    question:"Which city is popularly known as Financial Capital of India? ",
    answer:"Mumbai"
  }
];


var questionsLevelTwo = [
  {
    question:"Which city is popularly known as Deccan Queen? ",
    answer:"Pune"
  },
  {
    question:"Which city is popularly known as Orange city? ",
    answer:"Nagpur"
  },
  {
    question:"Which city is popularly known as Sun city? ",
    answer:"Jodhpur"
  },
  {
    question:"Which city is popularly known as Land of Lychees? ",
    answer:"Muazaffarpur"
  },
  {
    question:"Which city is popularly known The City of Nawabs? ",
    answer:"Lucknow"
  },
  {
    question:"Which city is popularly known as Cotton City? ",
    answer:"Yavatmal"
  },
  {
    question:"Which city is popularly known as Space city?  ",
    answer:"Bangalore"
  },
  {
    question:"Which city is popularly known as Scotland of India? ",
    answer:"Coorg"
  }

];

var questionsLevelThree = [
  {
    question:"Which city is popularly known as Rome of the East? ",
    answer:"Mangalore"
  },
  {
    question:"Which city is popularly known as City of Joy? ",
    answer:"Kolkata"
  },
  {
    question:"Which city is popularly known as Land of Black Diamond? ",
    answer:"Asansol"
  },
  {
    question:"Which city is popularly known as City of Destiny? ",
    answer:"Vizag"
  },
  {
    question:"Which city is popularly known as City of Spices? ",
    answer:"Calicut"
  },
  {
    question:"Which city is popularly known as Gold capital of India? ",
    answer:"Thrissur"
  },
  {
    question:"Which city is popularly known as Athens of the East? ",
    answer:"Coorg"
  },
  {
    question:"Which city is popularly known as Detroit of Asia? ",
    answer:"Chennai"
  },
  {
    question:"Which city is popularly known as Silver city? ",
    answer:"Cuttack"
  }
];





if(score>=4){
  console.log("Congrats!!! You have progressed to level 2.");
  console.log("* * * * * * * * * * * * *");
  for (var i=0; i<questions[1].length; i++){
  currentQues = questionsLevelTwo[i];
  play(currentQues.question,currentQues.answer);
}
}
if(score>=9){
  console.log("Congrats!!! You have progressed to level 3. ");
  console.log("* * * * * * * * * * * * *");
  for (var i=0; i<questions[2].length; i++){
  currentQues = questionsLevelThree[i];
  play(currentQues.question,currentQues.answer);
}
}

var questions=[questionsLevelOne,questionsLevelTwo,questionsLevelThree];

for (var i=0; i<questions[0].length; i++){
  currentQues = questionsLevelOne[i];
  play(currentQues.question,currentQues.answer);
}
console.log(finalScore("Aye!Your final score is: "+score));