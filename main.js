const score = document.querySelector('.score')
const question = document.querySelector('.question span')
const answers = document.querySelector('.answers')
const restartGame = document.querySelector('.restartGame')

const datas = [
  {
    question: ['red fruit'],
    answers: ['apple', 'banana', 'pear', 'lemon'],
    trueAnswer: 'apple'
  },
  {
    question: ['wheels number'],
    answers: [1, 2, 3, 4],
    trueAnswer: 4
  },
  {
    question: ['eyes number'],
    answers: [1, 2, 3, 4],
    trueAnswer: 2
  },
  {
    question: ['speed of sound (m/s)'],
    answers: [343, 945, 453, 628, 424, 387],
    trueAnswer: 343
  },
  {
    question: ['color of water'],
    answers: ['white', 'green', 'blue', 'none in this list'],
    trueAnswer: 'none in this list'
  }
]
let counter = 0
let scoreGame = 0

function deleteAnswers() {
  if (counter < datas.length) {
    for (let index = 0; index < answers.children.length; index) {
      answers.removeChild(answers.children[0])
      console.log('asdasd');
    }
  }
}

function createAnswers() {
  if (counter < datas.length) {
    datas[counter].answers.forEach(data => {
      const li = document.createElement('li')
      answers.appendChild(li)
      li.textContent = data
    });
  }
  return
}

function createQuestions() {
  if (counter < datas.length) {
    datas[counter].question.forEach(data => {
      question.textContent = data
    });
    return
  }
}

function verifyAnswer(e) {
  if (e.target.textContent == trueAnswer()) {
    scoreGame += 10
    return true
  }

  scoreGame -= 10
  e.target.classList.add('alert')
  setTimeout(() => {
    e.target.classList.remove('alert')
  }, 500)
  return false
}

function trueAnswer() {
  return datas[counter].trueAnswer
}

function handleStepsGame() {
  if (counter < datas.length) {
    trueAnswer()
    deleteAnswers()
    createQuestions()
    createAnswers()
    return
  }

  answers.textContent = ''
  question.textContent = 'End'
  score.textContent = 'your score is: ' + scoreGame
  return
}

answers.addEventListener('click', (e) => {
  let verify = verifyAnswer(e)
  console.log(counter);
  if (verify) {
    counter++
    handleStepsGame()
  }
  return
})

restartGame.addEventListener('click', () => {
  counter = 0
  scoreGame = 0
  question.textContent = ''
  score.textContent = ''
  handleStepsGame()
})

createQuestions()
createAnswers()