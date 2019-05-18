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

//let questionNumber = 1;

function handleStart() {
    //when user clicks button, removes the start page, then renders the question on the page with a header showing which question and score
    $('.js-start-quiz').on('click', function(event) {
        $('#start-page').remove();
        renderQuestion(0);
    })
}

function renderQuestion(index) {
    //renders the question on the page with the header at the top showing which question and score
    $('main').html(
        `<header>
            <h2>Question: ${index+1}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
        <section id='question'>
        <form>
          <fieldset>
            <legend>${quizAnswers[index].question}</legend>
            <label><input type="radio" name="answer" value="${quizAnswers[index].answers[0]}">${quizAnswers[index].answers[0]}</label>
            <label><input type="radio" name="answer" value="${quizAnswers[index].answers[1]}">${quizAnswers[index].answers[1]}</label>
            <label><input type="radio" name="answer" value="${quizAnswers[index].answers[2]}">${quizAnswers[index].answers[2]}</label>
            <label><input type="radio" name="answer" value="${quizAnswers[index].answers[3]}">${quizAnswers[index].answers[3]}</label>
            <button class="js-question-submit" type="submit">Submit</button>
          </fieldset>
        </form>
      </section>`
    );
    handleAnswer(index);
}

function handleAnswer(index) {
    //determines if the user's answer is correct or not
    $('form').on('submit', function(event) {
        event.preventDefault();
        let submission = $("input:checked").val();
        if(submission === quizAnswers[index].correctAnswer) {
            renderCorrect(index);
        }
        else renderIncorrect(index);
    });
}

function renderCorrect(index) {
    //removes the question and displays the "correct" page, updates header
    score++;
    $('#question').remove();
    $('main').html(
        `<header>
            <h2>Question: ${index+1}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
            <img src="correct.gif" alt="11th Doctor gives thumbs up" class="correct">
            <h1>Correct!</h1>`
    )
    handleNext(index);
}

function renderIncorrect(index) {
    //removes the question and displays the "incorrect" page, updates header
    console.log('incorrect');
    $('#question').remove();
    $('main').html(
        `<header>
            <h2>Question: ${index+1}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
            <img src="incorrect.gif" alt="10th Doctor shakes his head" class="incorrect">
            <h1>Incorrect!  This correct answer is ${quizAnswers[index].correctAnswer}</h1>`
        )
    
}

function handleNext(index) {
    //loads the next question of the quiz
    renderQuestion(index+1);
}

function handleResults() {
    //after answer page of last question, loads results page
}

handleStart();