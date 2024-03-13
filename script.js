
//Line I deleted from PHP $t=(time()*1000);
// Function to fetch page contents and extract <p> content
function fetchAndExtractContent() {
  fetch('./getUpdate.php')
  .then(response => response.text())
  .then(html => {
      // Create a temporary div element to hold the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Extract content of each <p> tag and save them in JavaScript variables
      player1Name = tempDiv.querySelector('#player1Name').textContent;
      endPlayer1Time = parseInt(tempDiv.querySelector('#endPlayer1Time').textContent);
      player2Name = tempDiv.querySelector('#player2Name').textContent;
      endPlayer2Time = parseInt(tempDiv.querySelector('#endPlayer2Time').textContent);
      player3Name = tempDiv.querySelector('#player3Name').textContent;
      endPlayer3Time = parseInt(tempDiv.querySelector('#endPlayer3Time').textContent);
      player4Name = tempDiv.querySelector('#player4Name').textContent;
      endPlayer4Time = parseInt(tempDiv.querySelector('#endPlayer4Time').textContent);

      // Now you have each <p> tag content saved in JavaScript variables

      var now = new Date().getTime();
      const h1NameP1 = document.getElementById('p1Name');
      h1NameP1.textContent = player1Name;
      const h1NameP2 = document.getElementById('p2Name');
      h1NameP2.textContent = player2Name;
      const h1NameP3 = document.getElementById('p3Name');
      h1NameP3.textContent = player3Name;
      const h1NameP4 = document.getElementById('p4Name');
      h1NameP4.textContent = player4Name;
  })
  .catch(error => {
      console.error('Error fetching page:', error);
  });
}
fetchAndExtractContent();

// Call the function every X milliseconds using setInterval
//setInterval(fetchAndExtractContent, 5000); // Replace 5000 with your desired interval in milliseconds
setInterval(fetchAndExtractContent, 10000); // Replace 5000 with your desired interval in milliseconds

//Timer Player1
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = endPlayer1Time - now;
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
  var distance = endPlayer2Time - now;
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
  var distance = endPlayer3Time - now;
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
  var distance = endPlayer4Time - now;
  console.log(distance);
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

