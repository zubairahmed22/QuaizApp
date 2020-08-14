

var min = document.getElementById("second")
var sec = document.getElementById("minutes")

var second = 0;
var mintues = 0;
function timer(){
    
    
    second ++
    sec.innerHTML = second
    if(second >=59){
        mintues ++
        min.innerHTML = mintues;
        second = 0;
        
        
        
        
    }
    
    console.log(second )
    console.log(mintues )
}
var interval;
function startTime(){
  interval = setInterval(timer,1000)
}

function clearTimer (){
    clearInterval(interval);
}