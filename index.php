
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- Display the countdown timer in an element -->
</head>
<body>
<?php
$player1Name = file_get_contents('./currentPlayers/Player1Name.txt', true);
$player2Name = file_get_contents('./currentPlayers/Player2Name.txt', true);
$player3Name = file_get_contents('./currentPlayers/Player3Name.txt', true);
$player4Name = file_get_contents('./currentPlayers/Player4Name.txt', true);
$t=(time()*1000);
$endPlayer1Time = $t + 1 * 60 * 1000;
$endPlayer2Time = $t + 2 * 60 * 1000;
$endPlayer3Time = $t + 3 * 60 * 1000;
$endPlayer4Time = $t + 4 * 60 * 1000;
?>
<script>
var countDownDateP1 = <?php echo $endPlayer1Time ?> 
var countDownDateP2 = <?php echo $endPlayer2Time ?> 
var countDownDateP3 = <?php echo $endPlayer3Time ?> 
var countDownDateP4 = <?php echo $endPlayer4Time ?> 
</script>


  <div class="container">
  <div class="row justify-content-md-left">
    <img src=images/AutitoRojo.png class="col col-lg-3">
    <h1 class="col-lg-3 align-self-center"> <?php echo $player1Name;?> </h1>
    <h4 class="col col-lg-3 align-self-center"> Tiempo restante: </h4>
    
    <h1 id="TimerPlayer1" class="col col-lg-3 align-self-center">TimerPlayer1</h1>
  </div>

  <div class="row justify-content-md-left">
    <img src=images/AutitoVerde.png class="col col-lg-3">
    <h1 class="col-lg-3 align-self-center"> <?php echo $player2Name;?> </h1>
    <h4 class="col col-lg-3 align-self-center"> Tiempo restante: </h4>
    <h1 id="TimerPlayer2" class="col col-lg-3 align-self-center">TimerPlayer2</h1>
  </div>

  <div class="row justify-content-md-left">
    <img src=images/AutitoAmarillo.png class="col col-lg-3">
    <h1 class="col-lg-3 align-self-center"> <?php echo $player3Name;?> </h1>
    <h4 class="col col-lg-3 align-self-center"> Tiempo restante: </h4>
    <h1 id="TimerPlayer3" class="col col-lg-3 align-self-center">TimerPlayer3</h1>
  </div>

  <div class="row justify-content-md-left">
    <img src=images/AutitoAzul.png class="col col-lg-3">
    <h1 class="col-lg-3 align-self-center"> <?php echo $player4Name;?> </h1>
    <h4 class="col col-lg-3 align-self-center"> Tiempo restante: </h4>
    <h1 id="TimerPlayer4" class="col col-lg-3 align-self-center">TimerPlayer4</h1>
  </div>

  </div>


  
  
  <script src="script.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
