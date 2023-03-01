const quizData=[
    {
        question: 'En cok kullanılan programlama dili hangisidir?',

        a:'Java',
        b:'Pyton',
        c:'Javascript',
        d:'C++',
    },

    {
        question: 'En iyi futbolcu kim?',

        a:'Sabri',
        b:'Zidena',
        c: 'Messi',
        d:'CR7',
    },

    {
        question: "İstanbul'un Fethi Kaçtır?",

        a:'1071',
        b:'1453',
        c: '1353',
        d:'1574',
    }
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn= document.getElementById("submit");




let currentQuiz = 0;
let score= 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerHTML= currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;


}

function getSelected() {
     let answer = undefined;

     answerElements.forEach((answerElements) => {
        if ( answerElements.checked){
            
            answer= answerElements.id;

        }
     });

     return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElements) => {
        answerElements.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});