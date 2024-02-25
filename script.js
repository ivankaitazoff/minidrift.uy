//Timer Player1
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countdownDateP1 - now;
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
  var distance = countdownDateP2 - now;
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
  var distance = countdownDateP3 - now;
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
  var distance = countdownDateP4 - now;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("TimerPlayer4").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Update Timer
    document.getElementById("TimerPlayer4").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}, 1000); 