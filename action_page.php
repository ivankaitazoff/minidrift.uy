<?php
$t=(time()*1000);
// Check if the POST request contains the parameters
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the parameters exist in the request
    if (isset($_POST['Jugador1Checkbox']) && $_POST['Jugador1Checkbox'] === 'true') {
        $Player1NameFile = './currentPlayers/Player1Name.txt';
        $Player1TimeFile = './currentPlayers/Player1EndTime.txt';
        // Retrieve the values of the parameters
        $nombreP1 = $_POST['nombreP1'];
        $tiempoP1 = $_POST['tiempoP1'];
        
        // Save the value to the file
        file_put_contents($Player1NameFile, $nombreP1);
        
        //Save time to a file
        $endPlayer1Time = $t + $tiempoP1 * 60 * 1000;
        file_put_contents($Player1TimeFile, $endPlayer1Time);

        // Now you can use these variables as needed
        echo "Jugador1Checkbox: " . $jugador1Checkbox . "<br>";
        echo "Nombre: " . $nombre . "<br>";
        echo "Tiempo: " . $tiempo . "minutos. <br>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 1 no actualizado<br><br>";
    }

    // Check if the parameters exist in the request
    if (isset($_POST['Jugador2Checkbox']) && $_POST['Jugador2Checkbox'] === 'true') {
        $Player2NameFile = './currentPlayers/Player2Name.txt';
        $Player2TimeFile = './currentPlayers/Player2EndTime.txt';
        // Retrieve the values of the parameters
        $nombreP2 = $_POST['nombreP2'];
        $tiempoP2 = $_POST['tiempoP2'];
        
        // Save the value to the file
        file_put_contents($Player2NameFile, $nombreP2);
        
        //Save time to a file
        $endPlayer2Time = $t + ($tiempoP2 * 60 * 1000);
        file_put_contents($Player2TimeFile, $endPlayer2Time);

        // Now you can use these variables as needed
        echo "Jugador2Checkbox: " . $jugador2Checkbox . "<br>";
        echo "Nombre: " . $nombreP2 . "<br>";
        echo "Tiempo: " . $tiempoP2 . "minutos. <br>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 2 no actualizado<br><br>";
    }

    // Check if the parameters exist in the request
    if (isset($_POST['Jugador3Checkbox']) && $_POST['Jugador3Checkbox'] === 'true') {
        $Player3NameFile = './currentPlayers/Player3Name.txt';
        $Player3TimeFile = './currentPlayers/Player3EndTime.txt';
        // Retrieve the values of the parameters
        $nombreP3 = $_POST['nombreP3'];
        $tiempoP3 = $_POST['tiempoP3'];
        
        // Save the value to the file
        file_put_contents($Player3NameFile, $nombreP3);
        
        //Save time to a file
        $endPlayer3Time = $t + ($tiempoP3 * 60 * 1000);
        file_put_contents($Player3TimeFile, $endPlayer3Time);

        // Now you can use these variables as needed
        echo "Jugador3Checkbox: " . $jugador3Checkbox . "<br>";
        echo "Nombre: " . $nombreP3 . "<br>";
        echo "Tiempo: " . $tiempoP3 . "minutos. <br>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 3 no actualizado<br><br>";
    }

    // Check if the parameters exist in the request
    if (isset($_POST['Jugador4Checkbox']) && $_POST['Jugador4Checkbox'] === 'true') {
        $Player4NameFile = './currentPlayers/Player4Name.txt';
        $Player4TimeFile = './currentPlayers/Player4EndTime.txt';
        // Retrieve the values of the parameters
        $nombreP4 = $_POST['nombreP4'];
        $tiempoP4 = $_POST['tiempoP4'];
        
        // Save the value to the file
        file_put_contents($Player4NameFile, $nombreP4);
        
        //Save time to a file
        $endPlayer4Time = $t + ($tiempoP4 * 60 * 1000);
        file_put_contents($Player4TimeFile, $endPlayer4Time);

        // Now you can use these variables as needed
        echo "Jugador4Checkbox: " . $jugador4Checkbox . "<br>";
        echo "Nombre: " . $nombreP4 . "<br>";
        echo "Tiempo: " . $tiempoP4 . "minutos. <br>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 4 no actualizado<br><br>";
    }

} 
?>