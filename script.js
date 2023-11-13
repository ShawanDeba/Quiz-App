questions = [
    {

        question: "What is the largest animal in world?",
        answers: [
            {
                answer: "blue whale",
                correct: true
            },
            {
                answer: "Tiger",
                correct: false
            },
            {
                answer: "Elephant",
                correct: false
            },
            {
                answer: "Dog",
                correct: false
            }]
    },
    {

        question: "What smallest country in world?",
        answers: [
            {
                answer: "bhutan",
                correct: false
            },
            {
                answer: "vetican city",
                correct: true
            },
            {
                answer: "nepal",
                correct: false
            },
            {
                answer: "sri lanka",
                correct: false
            }]
    },
    {

        question: "What is the largest desert in world?",
        answers: [
            {
                answer: "bhuj",
                correct: false
            },
            {
                answer: "amazon",
                correct: false
            },
            {
                answer: "antartica",
                correct: false
            },
            {
                answer: "shara",
                correct: true
            }]
    },
    {

        question: "What is the largest continent in world-4?",
        answers: [
            {
                answer: "austealia",
                correct: false
            },
            {
                answer: "asia",
                correct: true
            },
            {
                answer: "russia",
                correct: false
            },
            {
                answer: "america",
                correct: false
            }]
    },
];


let score = 0;
let question_number = 0;
let question_element = document.getElementById('question');
let answer_buttons = document.getElementById('answer-buttons');
let next_button = document.getElementById('next-btn');

start_quiz()










function start_quiz() {
    score = 0;
    question_number = 0;

    next_button.innerText = "Next";
    display_question();
}


function display_question() {

    clearPreviousOptions();

    // console.log(question_number + 1);
    next_button.style.display = "none";
    question_element.innerText = questions[question_number].question;

    create_options();
}


function create_options() {

    // here we need to clear the previous options - 


    questions[question_number].answers.forEach(element => {
        let btn = document.createElement('button');
        btn.innerText = element.answer;
        btn.classList.add('btn');

        answer_buttons.appendChild(btn);

        btn.addEventListener("click", optionClick);
        btn.dataset.option_answer = element.correct;

    });
}

function optionClick(event) {
    console.log(event.target);


    if (event.target.dataset.option_answer === 'true') {
        event.target.style.background = "green";
        score++;
    }

    else
        event.target.style.background = "red";


    Array.from(answer_buttons.children).forEach(element => {
        if (element.dataset.option_answer === 'true')
            element.style.background = "green";

        element.disabled = true;
    });


    next_button.style.display = "block";
    next_button.addEventListener('click', next_question)
}



function next_question() {

    console.log(question_number);

    question_number++;

    if (question_number < questions.length) 
            display_question()
    
    else if(question_number===questions.length)
        show_score();

    else
        start_quiz();

}


function show_score(){
    clearPreviousOptions();
    question_element.innerText = `Your Score is ${score} out of ${question_number}`;
    next_button.innerText = "Play Again";
}

function clearPreviousOptions() {
    while (answer_buttons.hasChildNodes())
        answer_buttons.removeChild(answer_buttons.firstChild);
}










