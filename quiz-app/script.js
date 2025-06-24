const quizData = [{
  question: 'How old is donald duck?',
  a: '10',
  b: '23',
  c: '44',
  d: '56',
  correct: 'c'
}, {
  question: 'Who is the current president of The Philippines?',
  a: 'Duterte',
  b: 'Marcos',
  c: 'Robredo',
  d: 'Aquino',
  correct: 'b'
}, {
  question: 'What is the most used programming language in 2025?',
  a: 'python',
  b: 'javascript',
  c: 'java',
  d: 'c++',
  correct: 'b'
}, {
  question: 'What does HTML stand for?',
  a: 'Hypertext Markup Language',
  b: 'Hyper Markup',
  c: 'HyperTeeext Language',
  d: 'HyperText Markup',
  correct: 'a'
}, {
  question: 'What year was JavaScript launched?',
  a: '1996',
  b: '1995',
  c: '1994',
  d: 'none of the above',
  correct: 'b'
}];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

};

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You Score is: ${score}/${quizData.length}</h2>`;
    } 
  }

})