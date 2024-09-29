
// Questions that will be asked
const Questions = [{
    q: "Hoy___?",
    a: [{ text: "johnyuru", isCorrect: false },
    { text: "gay", isCorrect: false },
    { text: "bkla", isCorrect: true },
    { text: "angelo", isCorrect: false }
    ]
 
},
{
    q: "anong ___ tongkol sa aken?",
    a: [{ text: "cnasabi", isCorrect: true, },
    { text: "sinasabi", isCorrect: false },
    { text: "pinapasok", isCorrect: false },
    { text: "chinekwas", isCorrect: false }
    ]
 
},
{
    q: "bkla _____ mo lang",
    a: [{ text: "tikman", isCorrect: false },
    { text: "tignan", isCorrect: false },
    { text: "ayosin", isCorrect: true },
    { text: "soguraduhin", isCorrect: false }
    ]
 

},
{
    q: "hello ____, menu po natin today",
    a: [{ text: "bkla", isCorrect: false },
    { text: "quiboloy", isCorrect: false },
    { text: "maam", isCorrect: true },
    { text: "diddy", isCorrect: false }
    ]
}
,
{
    q: "binaguongan baboy na may ___",
    a: [{ text: "talong", isCorrect: true },
    { text: "swine flu", isCorrect: false },
    { text: "tattoo", isCorrect: false },
    { text: "bagoong", isCorrect: false }
    ]
}
,
{
    q: "sinigang na bangus___",
    a: [{ text: "bkla", isCorrect: false },
    { text: "quiboloy", isCorrect: false },
    { text: "maam", isCorrect: false },
    { text: "dagupan", isCorrect: true }
    ]
}
,
{
    q: "Adobong___",
    a: [{ text: "bkla", isCorrect: false },
    { text: "manok", isCorrect: true },
    { text: "bisaya", isCorrect: false },
    { text: "baboy", isCorrect: false }
    ]
},
{
    q: "lechon___&",
    a: [{ text: "Paksiw", isCorrect: true },
    { text: "Kawali", isCorrect: false },
    { text: "Adobo", isCorrect: false },
    { text: "Kaserola", isCorrect: false }
    ]
}
,
{
    q: "at ",
    a: [{ text: "Dinuguan", isCorrect: true },
    { text: "Tinagusan", isCorrect: false },
    { text: "Grinipuhan", isCorrect: false },
    { text: "Minahal", isCorrect: false }
    ]
},
{
    q: "may munggo po, may talbos ng ___",
    a: [{ text: "bkla", isCorrect: false },
    { text: "Kamote", isCorrect: false },
    { text: "Ampalaya", isCorrect: true },
    { text: "Bulbol", isCorrect: false }
    ]
}
]


 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}