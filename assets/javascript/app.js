// Questions for the quiz

var theQuiz =[{
        question      :"What is the Klingon's spirtual leader that all houses of the Empire follow?",
        choices       :{
            a:  "Kahless", 
            b:  "Kortar", 
            c:  "Fek'lhr", 
            d:  "T’Kuvma"},
        correctAnswer :"a",
        image         :"assets/images/q1.jpg",
    },
    {
        question      :"Who was the first documented Captain of the USS Enterprise NCC-1701?",
        choices       :{
            a:  "Kirk", 
            b:  "Archer", 
            c:  "April", 
            d:  "Pike"},
        correctAnswer :"c",
        image         :"assets/images/q2.png",
    },
    {
        question      :"What is the max warp-factor that has been achieved using standard warp technology, and not through trans-warp or cosmic anomalies?",
        choices       :{
            a:  "9.6", 
            b:  "9.75", 
            c:  "9.9", 
            d:  "10.0"},
        correctAnswer :"c",
        image         :"assets/images/q3.jpg",
    },
    {
        question      :"Transporters have compensators to correct which law of quantium mechanics that it violates",
        choices       :{
            a:  "Canonical Quantization", 
            b:  "Uncertainty Principle", 
            c:  "Phase Space Formulation", 
            d:  "Feynman–Stueckelberg interpretation"},
        correctAnswer :"b",
        image         :"assets/images/q4.gif",
    },
    {
        question      :"What ritual do Vulcans undergo to prove they are purged of all emotions?",
        choices       :{
            a:  "Koon-ut-kal-iff-ee", 
            b:  "Kahs-wan", 
            c:  "Kolinahr", 
            d:  "Kobiyashi Maru"},
        correctAnswer :"c",
        image         :"assets/images/q5.png",
    },
    {
        question      :"Where in the neutral zone was the Kobayashi Maru when Saavik began the rescue mission?",
        choices       :{
            a:  "Beta Delta, Section 5", 
            b:  "Theta Delta Omicron 5", 
            c:  "Altair Vi, Section Epsilon", 
            d:  "Gamma Hydra, Section 10"},
        correctAnswer :"d",
        image         :"assets/images/q6.gif",
    }
];

//prep the global variables for tracking correct answers, quiz time, and questions

var qTime = 15;
const TOTALQUESTIONS = 6;
var currentQuestion = 0;
var correctAnswers = 0;
var finishQuiz = false;

function timer(){
    var countDown = setInterval(function(){
        qTime--;
        $("#gametime").text("Time Left: " + qTime);
        if (qTime <= 0){
            clearInterval(countDown);
        }
    }, 1000);
}

function makeQuiz() {
    //randomize the questions
    var pick = theQuiz[Math.floor(Math.random()*TOTALQUESTIONS)];
    var answers = pick.choices;
    var options = [];
    var solution = pick.correctAnswer;
    var imageAnswer = pick.image;
    $("#question").html(pick.question);

    //set the countdown
    timer();
    
    //render the html
    $.each(pick.choices, function(index, value){
        console.log(value);
        options.push(value);
    });
}

$(document).ready(function(){
    makeQuiz();
    $("#tryagain").hide();
    $("#answer").hide();
});
