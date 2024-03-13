<?php
$player1Name = file_get_contents('./currentPlayers/Player1Name.txt', true);
$player2Name = file_get_contents('./currentPlayers/Player2Name.txt', true);
$player3Name = file_get_contents('./currentPlayers/Player3Name.txt', true);
$player4Name = file_get_contents('./currentPlayers/Player4Name.txt', true);

//$endPlayer1Time = $t + 4 * 60 * 1000;
$endPlayer1Time = file_get_contents('./currentPlayers/Player1EndTime.txt', true);
//$endPlayer2Time = $t + 2 * 60 * 1000;
$endPlayer2Time = file_get_contents('./currentPlayers/Player2EndTime.txt', true);
//$endPlayer3Time = $t + 3 * 60 * 1000;
$endPlayer3Time = file_get_contents('./currentPlayers/Player3EndTime.txt', true);
//$endPlayer4Time = $t + 4 * 60 * 1000;
$endPlayer4Time = file_get_contents('./currentPlayers/Player4EndTime.txt', true);

//Print Player 1
echo "<p id='player1Name'>$player1Name</p>";
echo "<p id='endPlayer1Time'>$endPlayer1Time</p>";
//Print Player 2
echo "<p id='player2Name'>$player2Name</p>";
echo "<p id='endPlayer2Time'>$endPlayer2Time</p>";
//Print Player 3
echo "<p id='player3Name'>$player3Name</p>";
echo "<p id='endPlayer3Time'>$endPlayer3Time</p>";
//Print Player 4
echo "<p id='player4Name'>$player4Name</p>";
echo "<p id='endPlayer4Time'>$endPlayer4Time</p>";
?>