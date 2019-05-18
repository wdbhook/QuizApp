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
    correctAnswer: '',
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

const score = 0;

const questionNumber = 1;

function handleStart() {
    //when user clicks button, removes the start page, then renders the question on the page with a footer showing which question and score
    $('.js-start-quiz').on('click', function(event) {
        $('#start-page').remove();
        renderQuestion(0);
    })
}

function renderQuestion(index) {
    //renders the question on the page with the footer at the bottom showing which question and score
    $('main').html(
        `<header>
            <h2>Question: ${index}/10</h2>
            <h2>Score: ${score}</h2>
        </header>
        <section id='question'>
        <form>
          <fieldset>
            <legend>${quizAnswers[index].question}</legend>
            <label><input type="radio" name="answer">${quizAnswers[index].answers[0]}</label>
            <label><input type="radio" name="answer">${quizAnswers[index].answers[1]}</label>
            <label><input type="radio" name="answer">${quizAnswers[index].answers[2]}</label>
            <label><input type="radio" name="answer">${quizAnswers[index].answers[3]}</label>
            <button class="js-question-submit" type="submit">Submit</button>
          </fieldset>
        </form>
      </section>`
    );
    handleAnswer();
}

function handleAnswer() {
    //when user selects an answer and submits, removes the question and displays a page showing if it was correct or not. Footer updates.
    $('form').on('click', '.js-question-submit', function(event) {
        event.preventDefault();
        console.log($("input:checked").val());
    });
}

function handleNext() {
    //loads the next question of the quiz
}

function handleResults() {
    //after answer page of last question, loads results page
}

handleStart();