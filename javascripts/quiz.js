const questions = (list || []).sort((a, b) => 0.5 - Math.random());
let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const codeEl = document.getElementById("code");
const answerEl = document.getElementById("answers");
const qaSectionEl = document.getElementById("qa-section");
const messageEl = document.getElementById("message");
const progressEl = document.getElementById("progress");

function showQuestion() {
    const question = questions[currentQuestion];
    progressEl.innerText = `[${currentQuestion + 1} of ${questions.length} Questions. Current Score ${score} / ${questions.length}]`;
    questionEl.innerText = question.question;
    if (question.code) {
        codeEl.innerText = question.code || '';
        codeEl.style.display = 'inline-block';
    } else {
        codeEl.style.display = 'none';
    }

    answerEl.innerHTML = '';
    const shuffledAnswers = question.answers.sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < shuffledAnswers.length; i++) {
        const answer = shuffledAnswers[i];
        const answerDiv = document.createElement('div');
        answerDiv.innerText = answer.text;
        answerDiv.addEventListener('click', function () {
            if (answer.correct) {
                score++;
                answerDiv.classList.add('correct');
            } else {
                answerDiv.classList.add('incorrect');
            }
            disableAnswers();
            setTimeout(showNextQuestion, 700);
        });
        answerEl.appendChild(answerDiv);
    }
}

function disableAnswers() {
    const answerDivs = answerEl.getElementsByTagName('div');
    for (let i = 0; i < answerDivs.length; i++) {
        answerDivs[i].removeEventListener('click', function () { });
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    answerEl.innerHTML = '';
}
function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        messageEl.innerText = `Your score is ${score} out of ${questions.length}.`;
        qaSectionEl.style.display = 'none';
        disableAnswers();
    } else {
        showQuestion();
    }
}

resetQuiz();
showQuestion();


