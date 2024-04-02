<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$player1Name = file_get_contents('./currentPlayers/Player1Name.txt', true);
$player2Name = file_get_contents('./currentPlayers/Player2Name.txt', true);
$player3Name = file_get_contents('./currentPlayers/Player3Name.txt', true);
$player4Name = file_get_contents('./currentPlayers/Player4Name.txt', true);


$endPlayer1Time = file_get_contents('./currentPlayers/Player1EndTime.txt', true);
$player1Time = file_get_contents('./currentPlayers/Player1Time.txt', true);

$endPlayer2Time = file_get_contents('./currentPlayers/Player2EndTime.txt', true);
$player2Time = file_get_contents('./currentPlayers/Player2Time.txt', true);

$endPlayer3Time = file_get_contents('./currentPlayers/Player3EndTime.txt', true);
$player3Time = file_get_contents('./currentPlayers/Player3Time.txt', true);

$endPlayer4Time = file_get_contents('./currentPlayers/Player4EndTime.txt', true);
$player4Time = file_get_contents('./currentPlayers/Player4Time.txt', true);

//Print Player 1
echo "<p id='player1Name'>$player1Name</p>";
echo "<p id='endPlayer1Time'>$endPlayer1Time</p>";
echo "<p id='player1Time'>$player1Time</p>";
//Print Player 2
echo "<p id='player2Name'>$player2Name</p>";
echo "<p id='endPlayer2Time'>$endPlayer2Time</p>";
echo "<p id='player2Time'>$player2Time</p>";
//Print Player 3
echo "<p id='player3Name'>$player3Name</p>";
echo "<p id='endPlayer3Time'>$endPlayer3Time</p>";
echo "<p id='player3Time'>$player3Time</p>";
//Print Player 4
echo "<p id='player4Name'>$player4Name</p>";
echo "<p id='endPlayer4Time'>$endPlayer4Time</p>";
echo "<p id='player4Time'>$player4Time</p>";
?>
</body>
</html>



