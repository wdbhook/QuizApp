const quizAnswers = [
{
    question: 'What is the name of the planet the Slitheen come from?',
    answers: [ 'Skaro', 'Raxacoricofallapatorius', 'Midnight', 'Clom',],
    correctAnswer: 'Raxacoricofallapatorius',
},
{
    question: 'Who is the historical figure that the Doctor interacts with in the episode "The Girl in the Fireplace?"',
    answers: [ 'Queen Elizabeth', 'Winston Churchill', 'Cleopatra', 'Madame de Pompadour',],
    correctAnswer: 'Madame de Pompadour',
},
{
    question: 'What common item does the Doctor use to store his Timelord consciousness in "Human Nature"/"Family of Blood?"',
    answers: [ 'Screwdriver', 'Fob watch', 'Fez', 'Fountain pen',],
    correctAnswer: 'Fob watch',
},
{
    question: 'What is the name of the meat-eating monster from \"Silence in the Library\"/\"Forest of the Dead?\"',
    answers: [ 'Carrionite', 'Gelth', 'Vashta Nerada', 'Macra',],
    correctAnswer: 'Vashta Nerada',
},
{
    question: 'What is the Eleventh Doctor\'s favorite food?',
    answers: [ 'Fish Fingers and Custard', 'Beans', 'Yogurt', 'Bacon',],
    correctAnswer: 'Fish Fingers and Custard',
},
{
    question: 'Who is River Song\'s mother?',
    answers: [ 'Martha Jones', 'Melody Pond', 'Amy Pond', 'Rose Tyler',],
    correctAnswer: 'Amy Pond',
},
{
    question: 'What species is Madame Vastra?',
    answers: [ 'Silurian', 'Ood', 'Adipose', 'Dalek',],
    correctAnswer: 'Silurian',
},
{
    question: 'What is Clara Oswald\'s profession?',
    answers: [ 'Med student/Doctor', 'Shop girl', 'Kiss-o-gram', 'Nanny/Teacher',],
    correctAnswer: 'Nanny/Teacher',
},
{
    question: 'What is the original name of \"Me?\"',
    answers: [ 'Ashildr', 'Lady Cassandra', 'Matron Casp', 'Arya',],
    correctAnswer: 'Ashildr',
},
{
    question: 'Who is inside the vault that the Twelfth Doctor guards with Nardole?',
    answers: [ 'The Face of Boe', 'Missy', 'Margaret Blaine', 'Rassilon',],
    correctAnswer: 'Missy',
},
]

let score = 0;

let questionNumber = 1;

function handleStart() {
    //when user clicks button, renders the question on the page with a header showing which question and score
    $('.js-start-quiz').on('click', function(event) {
        renderQuestion();
    })
}

function renderQuestion() {
    //renders the question on the page with the header at the top showing which question and score
    $('main').html(
        `<header  role="banner">
            <h2>Question: ${questionNumber}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
        <section>
        <form>
          <fieldset>
            <legend>${quizAnswers[questionNumber-1].question}</legend>
            <label><input type="radio" name="answer" value="${quizAnswers[questionNumber-1].answers[0]}">${quizAnswers[questionNumber-1].answers[0]}</label>
            <label><input type="radio" name="answer" value="${quizAnswers[questionNumber-1].answers[1]}">${quizAnswers[questionNumber-1].answers[1]}</label>
            <label><input type="radio" name="answer" value="${quizAnswers[questionNumber-1].answers[2]}">${quizAnswers[questionNumber-1].answers[2]}</label>
            <label><input type="radio" name="answer" value="${quizAnswers[questionNumber-1].answers[3]}">${quizAnswers[questionNumber-1].answers[3]}</label>
            <button class="js-question-submit" type="submit">Submit</button>
          </fieldset>
        </form>
      </section>`
    );
    handleAnswer(questionNumber-1);
}

function handleAnswer() {
    //determines if the user's answer is correct or not
    $('form').on('submit', function(event) {
        event.preventDefault();
        let submission = $("input:checked").val();
        if(submission === quizAnswers[questionNumber-1].correctAnswer) {
            renderCorrect(questionNumber-1);
        }
        else renderIncorrect(questionNumber-1);
    });
}

function renderCorrect() {
    //displays the "correct" page, updates header
    score++;
    $('main').html(
        `<header  role="banner">
            <h2>Question: ${questionNumber}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
        <section>
            <img src="correct.gif" alt="11th Doctor gives thumbs up" class="correct">
            <h1>Correct!</h1>
            <button class="next">Next</button>
        </section>`
    );
    $('.next').on('click', function(event) {
        handleNext();
    });
}

function renderIncorrect() {
    //displays the "incorrect" page, updates header
    $('main').html(
        `<header  role="banner">
            <h2>Question: ${questionNumber}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
        <section>
            <img src="incorrect.gif" alt="10th Doctor shakes his head" class="incorrect">
            <h1>Incorrect!  The correct answer is ${quizAnswers[questionNumber-1].correctAnswer}</h1>
            <button class="next">Next</button>
        </section>`
    );
    $('.next').on('click', function(event) {
        handleNext();
    });
}

function handleNext() {
    //loads the next question of the quiz
    if(questionNumber < 10) {
        questionNumber++;
        renderQuestion();
    }
    else  {

        handleResults();
    }

}

function handleResults() {
    //after answer page of last question, loads results page
    let greatOrNot = "You are not a Whovian. Go watch some Doctor Who and try again!"
    if (score > 6) {
        greatOrNot = "Great Job! You are a Whovian!"
    }
    $('main').html(
        `<section> 
            <h1>${greatOrNot}</h1>
            <h2>You got ${score} out of 10</h2>
            <button class="restart">Restart Quiz</button>
         </section>
         `
    )
    score = 0;
    questionNumber = 1;
    $('.restart').on('click', function(event) {
        renderQuestion();
    });

}

handleStart();