let currentTime;
fetchAndExtractContent();
// Function to fetch page contents and extract <p> content
function fetchAndExtractContent() {
  fetch('./getUpdate.php')
  .then(response => response.text())
  .then(html => {
      // Create a temporary div element to hold the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Extract content of each <p> tag and save them in JavaScript letiables
      player1Name = tempDiv.querySelector('#player1Name').textContent;
      endPlayer1Time = parseInt(tempDiv.querySelector('#endPlayer1Time').textContent);
      player2Name = tempDiv.querySelector('#player2Name').textContent;
      endPlayer2Time = parseInt(tempDiv.querySelector('#endPlayer2Time').textContent);
      player3Name = tempDiv.querySelector('#player3Name').textContent;
      endPlayer3Time = parseInt(tempDiv.querySelector('#endPlayer3Time').textContent);
      player4Name = tempDiv.querySelector('#player4Name').textContent;
      endPlayer4Time = parseInt(tempDiv.querySelector('#endPlayer4Time').textContent);

      // Now you have each <p> tag content saved in JavaScript letiables

      let now = new Date().getTime();
      const h1NameP1 = document.getElementById('p1Name');
      h1NameP1.textContent = player1Name;
      const h1NameP2 = document.getElementById('p2Name');
      h1NameP2.textContent = player2Name;
      const h1NameP3 = document.getElementById('p3Name');
      h1NameP3.textContent = player3Name;
      const h1NameP4 = document.getElementById('p4Name');
      h1NameP4.textContent = player4Name;

      currentTime = now;
  })
  .catch(error => {
      console.error('Error fetching page:', error);
  });
}

//Timer Player1
function clockPlayer1() {
  // Find the distance between now and the count down date
  let distance = endPlayer1Time - currentTime;
  // If the count down is finished, write some text
  if (distance <= 0) {
    document.getElementById("TimerPlayer1").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes<10){
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10){
      seconds = "0" + seconds;
    }
    // Update Timer
    document.getElementById("TimerPlayer1").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}

//Timer Player3
function clockPlayer2() {
  // Find the distance between now and the count down date
  let distance = endPlayer2Time - currentTime;
  // If the count down is finished, write some text
  if (distance <= 0) {
    document.getElementById("TimerPlayer2").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes<10){
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10){
      seconds = "0" + seconds;
    }
    // Update Timer
    document.getElementById("TimerPlayer2").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}

//Timer Player3
function clockPlayer3() {
 // Find the distance between now and the count down date
  let distance = endPlayer3Time - currentTime;
  // If the count down is finished, write some text
  if (distance <= 0) {
    document.getElementById("TimerPlayer3").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes<10){
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10){
      seconds = "0" + seconds;
    }
    // Update Timer
    document.getElementById("TimerPlayer3").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}

//Timer Player4
function clockPlayer4() {
  // Find the distance between now and the count down date
  let distance = endPlayer4Time - currentTime;
  // If the count down is finished, write some text
  if (distance <= 0) {
    document.getElementById("TimerPlayer4").innerHTML = "Tiempo Terminado";
  }
  else{
    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes<10){
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10){
      seconds = "0" + seconds;
    }
    // Update Timer
    document.getElementById("TimerPlayer4").innerHTML =  hours + ":" + minutes + ":" + seconds;
  }
}

let counter=0;
setInterval(() => {
  if(counter==5){
    counter=0;
    fetchAndExtractContent();
  }else{
    counter++;
  }
  currentTime = new Date().getTime();
  //console.log(currentTime);
  clockPlayer1();
  clockPlayer2();
  clockPlayer3();
  clockPlayer4();
}, 1000);
