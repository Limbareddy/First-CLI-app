var read = require("readline-sync");
var score = 0;
var username = read.question(" Hey whats your name ")
console.log("hii  " + username + " Do You know Limbareddy")
// console.log("Type answers in small letters")
function display(question, answer) {
  var useranswer = read.question(question).toLowerCase();
  if (useranswer == answer) {
    console.log(" you are right")
    score = score + 1;
  } else {
    console.log(" you are wrong")
  } console.log(" you score -> " + score)
  console.log("---------")
}

var questions = [{
  question: "Do you know me ",
  answer: "yes",
},
{
  question: "Which is my favorite Application? ",
  answer: "twitter",
}, {
  question: "Which is my favorite place",
  answer: "home",
},
{
  question: "Who is your best friend? ",
  answer: "limbareddy",
}, {
  question: "Which is my favorite dish? \n 1.veg \n 2.non veg \n 3.both ",
  answer: "3",
}]
for (i = 0; i < questions.length; i++) {
  var user = questions[i];
  display(user.question, user.answer)
}
console.log("Your Final score  is ->: ", score)

var highscores = [
  {
    name: "Sumanth ", score: "2",
  },
  {
    name: "Nachi ", score: "3"
  }
]
for(i=0;i<highscores.length;i++){
  if(score> highscores[i].score){
    console.log(" You have beaten " +highscores[i].name+ " send me a screen shot to upload score")
  }
}

