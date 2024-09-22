/* Geek, C. 2022. Create a Quiz App using HTML, CSS & JavaScript. [Accessed 1 May 2024]. Available from: https://www.youtube.com/watch?v=Opje9VBrNfg. */

$(document).ready(function() {


    // CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 10;

    const question = document.getElementById("question");
    const choices = Array.from(document.getElementsByClassName("choice-text"));
    const questionCounterText = document.getElementById("questionCounter");
    const scoreText = document.getElementById("score");

    let currentQuestion = {};
    let acceptingAnswers = true;
    let score = 0;
    let questionCounter = 0;
    let availableQuestions = {};

    /* Question List */
    let questions = [
        {
            question: "Which animal has three hearts? ",
            choice1: "Octopus", 
            choice2: "Dolphin",
            choice3: "Elephant",
            choice4: "Spider",
            answer: 1
        },

        {
            question: "Which animals eyes turns blue in winter? ",
            choice1: "Polar Bear", 
            choice2: "Arctic Fox",
            choice3: "Reindeer",
            choice4: "Penguin",
            answer: 3
        },

        {
            question: "Which animal has no stomach? ",
            choice1: "Koala", 
            choice2: "Platypus",
            choice3: "Kangaroo",
            choice4: "Ostrich",
            answer: 2
        },

        {
            question: "Where is the annual event known as the Running of the Bulls held? ",
            choice1: "Italy", 
            choice2: "France",
            choice3: "Mexico",
            choice4: "Spain",
            answer: 4
        },

        {
            question: "What is the name of the festival in Bali that involves a 24-hour period of silence and meditation?  ",
            choice1: "Nyepi", 
            choice2: "Diwali",
            choice3: "Vesak",
            choice4: "Songkran",
            answer: 1
        },

        {
            question: "What year was the Pet Rock invented?",
            choice1: "1963", 
            choice2: "1975",
            choice3: "1955",
            choice4: "1939",
            answer: 2
        },

        {
            question: "Which indigenous tribe in Southern Kenya and Northern Tanzania is known for drinking cow's blood for various life events?",
            choice1: "The Maasai", 
            choice2: "The Merina",
            choice3: "The Balinese",
            choice4: "The Mermaids",
            answer: 1
        },

        {
            question: "What was the purpose of the Spaghetti Aid invention?",
            choice1: "To scare away house rodents", 
            choice2: "To save time for barbers",
            choice3: "To make it easier to eat spaghetti",
            choice4: "To allow multiple riders on a bicycle",
            answer: 3
        },

        {
            question: "In which Spanish village do men dressed as yellow devils run and jump over babies in a yearly festival?",
            choice1: "Pamplona", 
            choice2: "Castrillo de Murcia",
            choice3: "Ubud",
            choice4: "Maasai Mara",
            answer: 1
        },

        {
            question: "Who invented the Cat-Mew Machine?",
            choice1: "Gary Dahl", 
            choice2: "Japanese Inventor",
            choice3: "Russell E. Oakes",
            choice4: "Charles Steinlauf",
            answer: 3
        },
        

    ];


    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        console.log(availableQuestions);
        getNewQuestion();
    };

    
    getNewQuestion = () => {
        if (!questionCounterText) {
            // Do something to handle the case where questionCounterText doesn't exist
            console.error("questionCounterText element not found.");
            return;
        }
        
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign("end.html");
        }
        questionCounter++;
        questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });

        choices.forEach(choice => {
            choice.addEventListener("click", () => {
                if (!acceptingAnswers) return;

                acceptingAnswers = false;
                const selectedAnswer = choice.dataset["number"];
                let classToApply = "incorrect";
                if (selectedAnswer == currentQuestion.answer) {
                    classToApply = "correct";
                    incrementScore(CORRECT_BONUS);
                }

                choice.parentElement.classList.add(classToApply);

                setTimeout(() => {
                    choice.parentElement.classList.remove(classToApply);
                    getNewQuestion();
                }, 1000); 
            });
        });


        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };

    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    };



    startGame();
});


