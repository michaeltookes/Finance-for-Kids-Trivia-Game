/*
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const questionOneChoices = ["A Car", "A Watch", "A Boat", "A House"];
const questionTwoChoices = ["Stocks", "A Car", "Real Estate"];
const questionThreeChoices = ["True", "False"];
*/

const questions = [

// Will add more questions once we have a better idea of what is relevant.
// This following is a placeholder for the time being

    {
        question: "Which item is an Asset?",
        choices: ["A Car", "A Watch", "A Boat", "A House"],
        answer: "A House"
    },

    {
        question: "Which item is a Liability?",
        choices: ["Stocks", "A Car", "Real Estate"],
        answer: "A Car"
    },

    {
        question: "True or False: Credit cards are bad and should NEVER be used?",
        choices: ["True", "False"],
        answer: "False"
    }

];

let container = document.getElementById("quiz-container");

for (let i = 0; i < questions.length; i++) {
    let question = questions[i].question;
    let choices = questions[i].choices;

    let questionElement = document.createElement("div");
    questionElement.innerText = question;
    container.appendChild(questionElement);

    for (let j = 0; j < choices.length; j++) {
        let choice = choices[j];
        let label = document.createElement("label");
        let input = document.createElement("input");
        radio.type = "radio";
        radio.name = "question" + i;
        radio.value = choice;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(choice));
        container.appendChild(label);
    }
}

/* placed this in here as a Proof of Concept for myself.
// We can remove the following after the Code Review

function startQuiz() {
    window.location.href = "http://www.google.com";
    console.log("Quiz Started");
}
*/

/*
// Create a div to serve as the modal overlay
const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");
document.body.appendChild(modalOverlay);

// Create a div to serve as the modal content area
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modalOverlay.appendChild(modalContent);

// Create a button to close the modal
const closeButton = document.createElement("button");
closeButton.innerText = "Close";
closeButton.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});
modalContent.appendChild(closeButton);

// Show the modal when a button is clicked
const openButton = document.getElementById("open-button");
openButton.addEventListener("click", () => {
  modalOverlay.style.display = "block";
  window.location.href = "http://www.google.com"; // Have Google in as a placeholder for the time being.
  console.log("Quiz Started");
});

const question1 = `
<h1>Question 1:</h1>
<p>${questions[0].question}</p>`

document.getElementById("screen1").innerHTML = question1;

const question2 = `
<h1>Question 2:</h1>
<p>${questions[1].question}</p>
<ul>
    <li>${questions[1].choice[0]}</li>
    <li>${questions[1].choice[1]}</li>
    <li>${questions[1].choice[2]}</li>
</ul> `;

document.getElementById("screen2").innerHTML = question2;

const question3 = `
<h1>Question 3:</h1>
<p>${questions[2].question}</p>
<ul>
    <li>${questions[2].choice[0]}</li>
    <li>${questions[2].choice[1]}</li>
</ul> `;

document.getElementById("screen3").innerHTML = question3;
*/