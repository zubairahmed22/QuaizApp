// alert("my Quaiz app ");
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
},
{
    id: 4,
    question: "Who scored first dubble hundrad in ODI Cricket ",
    answer: "Sachin Tendulkar",
    options:[
        "Chris Gayle",
        "Virender Sehwag.",
        "Martin Guptill",
        "Sachin Tendulkar"
    ]
},
{id: 5,
question: "Highest individual score in One Day International cricket",
answer: 264,
options:[
    215,
    237,
    219,
    264
]
}

]

var question_count = 0;
var scorePoint = 0;
function next(){
    var endpage = document.querySelector(".endpage")
    console.log(endpage)
    if (question_count == allQusestion.length -1){
         
       endpage.style.display = "block" 
       clearTimer()
        
    }
    var userAnswer = document.querySelector("li.items.active").innerHTML
    if(userAnswer == allQusestion[question_count].answer){
        scorePoint += 10;
        console.log(scorePoint)
    }
    var point = document.querySelector(".yourpoint").innerHTML = "Your Score is " 
    + scorePoint;
    var resultTime = document.querySelector(".timer")
    var getMinutes = document.querySelector(".timer1")
    getMinutes.innerHTML = "Time " + mintues +
     " mintues";

     
    resultTime.innerHTML =  second + " Seconds ";
    


    question_count ++
    show(question_count);
    
    // getScore(scoreCount)
    console.log(getMinutes)
}


function show(e){
    var getQuest = document.getElementById("what")
    getQuest.innerHTML = `<h5> ${allQusestion[e].question}</h5>
    
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

function startQuaiz(){
    var userName = document.getElementById("name");
    var startbox = document.querySelector(".endpage1")
    var  welcome = document.getElementsByTagName("h2")
    welcome[0].innerText = " welcome " + userName.value;
    console.log(welcome[0])

    if(userName.value !== ""){
        startbox.style.display = "None";
        
    }
    else{
       
        startbox.style.display = "block";  
    }
    startTime()
}