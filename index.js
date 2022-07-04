var questionsArr = [
    {
      question: 'In which continent are Chile, Argentina and Brazil?',
      answer: 'South America',
      options: [
        'North America',
        'Europe',
        'Australia',
        'South America'
      ]
    },
    {
        question: 'The Mad Hatter and the Cheshire Cat are characters in which famous book?',
        answer: 'Alice in Wonderland',
        options: [
          'Whinnie-the-Pooh',
          'Charlottes Web',
          'Charlie and the Chocolate Factory',
          'Alice in Wonderland'
        ]
      },
      {
        question: 'Which artist famously cut off his own ear?',
        answer: 'Vincent Van Gogh',
        options: [
          'Vincent Van Gogh',
          'Claude Monet',
          'Salvador Dali',
          'Pablo Picasso'
        ]
      },
      {
        question: 'Who sang the title song for the Bond film, No Time to Die?',
        answer: 'Billie Eilish',
        options: [
          'Adele',
          'Sam Smith',
          'Billie Eilish'
        ]
      },
      {
        question: 'What spirit is used in making a Tom Collins?',
        answer: 'Gin',
        options: [
          'Vodka',
          'Rum',
          'Gin',
          'Tequila',
          'Whiskey'
        ]
      },
  ]

var quiz = document.getElementById('quiz')
var score = 0
var currentQuestion = 0 
var timeRemaining
var timerID

quiz.onclick = function(e){
    if(e.target.id === 'start-quiz') {
        drawQuestion()
    }
    else if(e.target.parentElement.id === 'choices' && e.target.tagName === 'BUTTON'){
        if(e.target.textContent === questionsArr[currentQuestion].answer){
            score++
        }
        clearInterval(timerID)
        currentQuestion++

        if(currentQuestion < questionsArr.length){
            drawQuestion()
        }
        else {
            endGame()
        }
    }
}

function gameStart(){
    score = 0
    currentQuestion = 0
    quiz.innerHTML = ""
    var previousScore = localStorage.getItem('previous-score')

    if(previousScore){
        var previousScoreDisplay = document.createElement('p')
        previousScoreDisplay.textContent = "Previous score: " + previousScore
        quiz.appendChild(previousScoreDisplay)
    }
    
    var startButton = document.createElement('button')
    startButton.id = 'start-quiz'
    startButton.textContent = 'Start Quiz!'
    quiz.appendChild(startButton)
}

function drawQuestion(){
    var questionObj = questionsArr[currentQuestion]
    quiz.innerHTML = ""

    var questionText = document.createElement('p')
    questionText.textContent = questionObj.question
    quiz.appendChild(questionText)

    var choices = document.createElement('div')
    choices.id = 'choices'
    quiz.appendChild(choices)

    questionObj.options.forEach(function(choice){
        var btn = document.createElement('button')
        btn.textContent = choice
        choices.appendChild(btn)
    })

    timeRemaining = 30
    var timer = document.createElement('p')
    timer.id = 'timer'
    timer.textContent = timeRemaining
    quiz.appendChild(timer)
    startTimer()
}

function startTimer(){
    var timer = document.getElementById('timer')
    timerID = setInterval(function(){
        timeRemaining--

        if(timeRemaining >= 0){
            timer.textContent = timeRemaining
        }
        else {
            clearInterval(timerID)
            currentQuestion++
            if(currentQuestion < questionsArr.length){
                drawQuestion()
            }
            else{
                endGame()
            }
        }
    },1000)
}

function endGame(){
    quiz.innerHTML = ""
    var percentage = Math.round(score / questionsArr.length * 100) + "%"
    localStorage.setItem('previous-score', percentage)
    gameStart()
}

gameStart()