const launchBtn = document.getElementById("launchBtn");
const retakeBtn = document.getElementById("retakeBtn");
const showWelcomeBtn = document.getElementById('showWelcomeBtn');
const quizWrapperEl = document.getElementById("quiz-wrapper");
const quizWelcomeEl = document.getElementById("quiz-welcome");
const quizResultEl = document.getElementById("quiz-result");
const questionEl = document.getElementById("question");
const codeEl = document.getElementById("code");
const answerEl = document.getElementById("answers");
const qaSectionEl = document.getElementById("qa-section");
const messageEl = document.getElementById("message");
const finalScoreEl = document.getElementById("finalScore");
const progressEl = document.getElementById("progress");

const launchQuiz = (list) => {

  const questions = list.sort((a, b) => 0.5 - Math.random());
  let currentQuestion = 0;
  let score = 0;

  function showQuestion() {
    const question = questions[currentQuestion];
    progressEl.innerText = `[${currentQuestion+1} of ${questions.length} Questions. Current Score ${score} / ${questions.length}]`;
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
      answerDiv.addEventListener('click', function() {
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
      answerDivs[i].removeEventListener('click', function() {});
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
      finalScoreEl.innerText = `Your score is ${score} out of ${questions.length}.`;
      quizResultEl.style.display = 'inline-block';
      qaSectionEl.style.display = 'none';
      disableAnswers();
    } else {
      showQuestion();
    }
  }

  resetQuiz();
  showQuestion();
};
const showWelcome = () => {
  quizWrapperEl.style.display = 'none';
  codeEl.style.display = 'none';
  qaSectionEl.style.display = 'none';
  quizResultEl.style.display = 'none';
  quizWelcomeEl.style.display = 'inline-block';
  launchQuiz(list);
}

const showQuiz = () => {
  quizWrapperEl.style.display = 'inline-block';
  codeEl.style.display = 'inline-block';
  codeEl.style.display = 'inline-block';
  qaSectionEl.style.display = 'inline-block';
  quizResultEl.style.display = 'none';
  quizWelcomeEl.style.display = 'none';
  launchQuiz(list);
};
launchBtn.addEventListener('click', showQuiz);
retakeBtn.addEventListener('click', showQuiz);
showWelcomeBtn.addEventListener('click', showWelcome);