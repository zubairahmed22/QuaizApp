window.onload = function(){
    show(0)
} 

var allQusestion = [{
    id: 1,
    question: "which player is scored fastest century in the T20 cricket",
    answer: "Rohit sharma and divid Miller",
    options:[
        "Richard Levi",
        "Chris Gayle", 
        "AB de Villiers",
        "Rohit sharma and divid Miller"
    ]
},
{
    id: 2,
    question: "who won the 2019 world cup?",
    answer: "England",
    options:[
        "Newzeland",
        "England",
        "Australia",
        "India"
    ]
},
{id: 3,
question:"which Team has won the T20 world Cup two time?",
answer: "West Indies",
options:[
    "India",
    "Australia",
    "Pakistan",
    "West Indies"
]
}
]

var question_count = 0;
var scorePoint = 0;
function next(){
    if (question_count == allQusestion.length -1){
        location.href = "end.html";
        return;
    }
    var userAnswer = document.querySelector("li.items.active").innerHTML
    if(userAnswer == allQusestion[question_count].answer){
        scorePoint += 10;
        console.log(scorePoint)
    }
    
    question_count ++
    show(question_count);
    var point = document.querySelector("yourpoint")
    console.log(point)
    // getScore(scoreCount)
}


function show(e){
    var getQuest = document.getElementById("what")
    getQuest.innerHTML = `<h4> ${allQusestion[e].question}</h4>
    
        <li class="items">${allQusestion[e].options[0]}</li>
        <li class="items">${allQusestion[e].options[1]}</li>
        <li class="items">${allQusestion[e].options[2]}</li>
        <li class="items">${allQusestion[e].options[3]}</li>
   
    `
    active()
}

function active(){
let activeQuest = document.querySelectorAll("li.items")
for(let i = 0; i < activeQuest.length; i ++){
    activeQuest[i].onclick = function(){
        for(var j =0; j<activeQuest.length; j ++){
            if(activeQuest[j].classList.contains("active")
            
            )
            activeQuest[j].classList.remove("active")
        }
        activeQuest[i].classList.add("active");
    }
}

}


var point = document.querySelector(".yourpoint").innerHTML = scorePoint;
console.log(point)