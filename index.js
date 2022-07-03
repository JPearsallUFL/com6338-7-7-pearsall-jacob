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
var score = localStorage.getItem('score')
var text = document.createElement("p")
text.textContent ="Previous score: " + score  + "%"
var startButton = document.createElement("button")
startButton.id = "start-quiz"
startButton.textContent = "Start Quiz!"
var div = document.createElement("div")
var tempScore = 0
// var btn_option = document.getElementsByClassName("clicked")
var button
var answer



//Set Start Quiz Button and text if have played before
if (score){
    quiz.appendChild(text)
    quiz.appendChild(startButton)

} else {
    quiz.appendChild(startButton)
}

//Display questions
startButton.onclick = function(){
    quiz.innerHTML = ""
    for (i = 0; i < questionsArr.length; i++){
        text.textContent = questionsArr[i].question
        answer = questionsArr[i].answer
        quiz.appendChild(text)
        quiz.appendChild(div)
        question(i)
        console.log(answer)
        btn_option.onclick = function(){
            correct(answer)
        }
    }
}

//function for question
function question(a){
    for(i =  0; i < questionsArr[a].options.length; i++){
        button = document.createElement("button")
        button.textContent = questionsArr[a].options[i]
        // button.onclick(i)
        div.appendChild(button)
    }
    // btn_option = div.querySelectorAll("button")
    // console.log(btn_option)
    // console.log(btn_option)
    // btn_option = document.getElementsByClassName("clicked")
    // btn_option.onclick = correct

    // btn_option.onclick = correct
    // console.log(btn_option)
}

//function to check if correct
// btn_option.addEventListener("click", function(e){
//     if (e.target.textContent === "South America"){
//         console.log(ha)
//     }
// })

function correct(a) {
    if (a.textContent === this.textContent){
        tempScore++
        console.log(tempScore)
    } else{
        console.log("blah")
    }
}