//Timer Player1
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDateP1 - now;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("TimerPlayer1").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update Timer
    document.getElementById("TimerPlayer1").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}, 1000);

//Timer Player3
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDateP2 - now;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("TimerPlayer2").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Update Timer
    document.getElementById("TimerPlayer2").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}, 1000);

//Timer Player3
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDateP3 - now;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("TimerPlayer3").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Update Timer
    document.getElementById("TimerPlayer3").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}, 1000);

//Timer Player4
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distanceP4 = countDownDateP4 - now;
  // If the count down is finished, write some text
  if (distanceP4 < 0) {
    clearInterval(x);
    document.getElementById("TimerPlayer4").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    var hoursP4 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesP$ = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondsP4 = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Update Timer
    document.getElementById("TimerPlayer4").innerHTML =  hoursP4 + ":" + minutesP4 + ":" + secondsP4;

  }
}, 1000); 