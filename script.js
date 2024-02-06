//var countDownDate = new Date().getTime() + 15 * 60 * 1000;

function setInterval(countdownJSVariableName,timerId){
    // Update the count down every 1 second

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countdownJSVariableName - now;
  
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById(timerId).innerHTML =  hours + ":"
    + minutes + ":" + seconds;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(timerId).innerHTML = "Tiempo Terminado";
    }
}

var x = setInterval("countDownDateP1","TimerPlayer1");

