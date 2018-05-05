
// Questions for the quiz

var theQuiz =[{
        "question"      :"Who is the Klingon's spirtual leader that all houses of the Empire follow?",
        "option1":  "Kahless", 
        "option2":  "Kortar", 
        "option3":  "Fek'lhr", 
        "option4":  "T’Kuvma",
        "correctAnswer" :"1",
        "image"         :"assets/images/q1.jpg",
    },
    {
        "question"      :"Who was the first documented Captain of the USS Enterprise NCC-1701?",
        "option1":  "Kirk", 
        "option2":  "Archer", 
        "option3":  "April", 
        "option4":  "Pike",
        "correctAnswer" :"3",
        "image"         :"assets/images/q2.png",
    },
    {
        "question"      :"What is the max warp-factor that has been achieved using standard warp technology, and not through trans-warp or cosmic anomalies?",
        "option1":  "9.6", 
        "option2":  "9.75", 
        "option3":  "9.9", 
        "option4":  "10.0",
        "correctAnswer" :"3",
        "image"         :"assets/images/q3.jpg",
    },
    {
        "question"      :"Transporters have compensators to correct which law of quantium mechanics that it violates",
        "option1":  "Canonical Quantization", 
        "option2":  "Uncertainty Principle", 
        "option3":  "Phase Space Formulation", 
        "option4":  "Feynman–Stueckelberg interpretation",
        "correctAnswer" :"2",
        "image"         :"assets/images/q4.gif",
    },
    {
        "question"      :"What ritual do Vulcans undergo to prove they are purged of all emotions?",
        "option1":  "Koon-ut-kal-iff-ee", 
        "option2":  "Kahs-wan", 
        "option3":  "Kolinahr", 
        "option4":  "Kobiyashi Maru",
        "correctAnswer" :"3",
        "image"         :"assets/images/q5.png",
    },
    {
        "question"      :"Where in the neutral zone was the Kobayashi Maru when Saavik began the rescue mission?",
        "option1":  "Beta Delta, Section 5", 
        "option2":  "Theta Delta Omicron 5", 
        "option3":  "Altair Vi, Section Epsilon", 
        "option4":  "Gamma Hydra, Section 10",
        "correctAnswer" :"4",
        "image"         :"assets/images/q6.gif",
    }
];

//prep the global variables for tracking correct answers, quiz time, and questions

var qTime = 30;
var totalQuestions = theQuiz.length;
var currentQuestion = 0;
var correctAnswers = 0;
var questionElem = $("#question");
var choice1 = $("#opt1");
var choice2 = $("#opt2");
var choice3 = $("#opt3");
var choice4 = $("#opt4");

function timer(){
    var countDown = setInterval(function(){
        qTime--;
        $("#gametime").text("Time Left: " + qTime);
        if (qTime <= 0){
            clearInterval(countDown);
            results();
        }
    }, 1000);
}

// Building the initial display for the questions and answers

function buildQuiz(questionIndex){
    var pick =theQuiz[questionIndex];
    $("#image").html('<img src="' + pick.image + '" />');
    questionElem.text(pick.question);
    choice1.text(pick.option1);
    choice2.text(pick.option2);
    choice3.text(pick.option3);
    choice4.text(pick.option4);
}

// This function is triggered when the user click on the next button

function nextQuestion() {
    var userSelected = document.querySelector("input[type=radio]:checked");
    // If the user does not select anything
    if(!userSelected){
        alert("Please select an option");
    }
    // If the user guess correctly, the answer is added
    var answer = userSelected.value;
    if(theQuiz[currentQuestion].correctAnswer == answer){
        correctAnswers++;
    }
    userSelected.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions - 1){
        $("#nextBtn").text("Finish");
    }
    if(currentQuestion == totalQuestions){
        results();
        return
    }
    buildQuiz(currentQuestion);
}

//dumping the correct answers when either time runs out or all questions have been answered

function results(){
    $("#time").hide();
    $("#quizContainer").hide();
    $("#choiceContainer").hide();
    $("#result").show();
    $("#correct").text(correctAnswers + " out of " + totalQuestions + " correct!");
    if(correctAnswers == totalQuestions){
        $("#trekimg").html('<img src="assets/images/awesometrek.gif" />');
    }
    else if(correctAnswers > 3){
        $("#trekimg").html('<img src="assets/images/oktrek.gif" />');
    }
    else {
        $("#trekimg").html('<img src="assets/images/sadtrek.gif" />');
    }
    return
}

//restart the game
function restart() {
    $("#result").hide();
    // $("#tryAgain").hide();
    $("#startOver").on("click", function (){
        location.reload();
    })
}

$(document).ready(function(){
    timer();
    buildQuiz(currentQuestion);
    restart();
});
