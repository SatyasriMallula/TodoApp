let question = document.getElementById("question");
let options = document.getElementById("options")
let opt = document.querySelectorAll(".list_items")
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let rd1 = document.getElementById("rd1");
let rd2 = document.getElementById("rd2");
let rd3 = document.getElementById("rd3");
let rd4 = document.getElementById("rd4");
let next = document.getElementById("next");
let quiz_container = document.getElementById('quiz_container')
let quizdata = [{
    "question": "A flashing red traffic light signifies that a driver should do what?",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
}, {
    "question": "A knish is traditionally stuffed with what filling?",
    "A": "potato",
    "B": "creamed corn",
    "C": "lemon custard",
    "D": "raspberry jelly",
    "answer": "A"
}, {
    "question": "A pita is a type of what?",
    "A": "fresh fruit",
    "B": "flat bread",
    "C": "French tart",
    "D": "friend bean dip",
    "answer": "B"
}, {
    "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
    "A": "landscape",
    "B": "caricature",
    "C": "still life",
    "D": "Impressionism",
    "answer": "B"
}, {
    "question": "A second-year college student is usually called a what?",
    "A": "sophomore",
    "B": "senior",
    "C": "freshman ",
    "D": "junior ",
    "answer": "A"
}]

let currentquetion = 0;
let currectanswers = 0;
let answer = 0;
let answerdquestions = 0;
loadquestions();
function loadquestions() {
    question.innerText = quizdata[currentquetion].question;
    option1.innerText = quizdata[currentquetion].A;
    option2.innerText = quizdata[currentquetion].B;
    option3.innerText = quizdata[currentquetion].C;
    option4.innerText = quizdata[currentquetion].D;
}
var selectedoption = [];
var selectedoption1;
function getselected() {
    opt.forEach(option => {
        option.addEventListener('click', () => {
            opt.forEach(otheroptions => {
                if (otheroptions !== option) {
                    otheroptions.checked = false;
                }
            })
        })
    });

}
function getKeyByValue(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
}
getselected()
// console.log(selectedoption)
function getNextQuestion() {
    quizdata.forEach(function (question, index) {

    })
}
console.log(currentquetion)
