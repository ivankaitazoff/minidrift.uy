<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
    // Wait for 5 seconds and then redirect
    setTimeout(function() {
        window.location.href = '/crearCarrera.html';
    }, 5000); // 5000 milliseconds = 5 seconds
</script>

</head>
<body>
<?php
$t=(time()*1000);
// Check if the POST request contains the parameters
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the parameters exist in the request
    if (isset($_POST['Jugador1Checkbox']) && $_POST['Jugador1Checkbox'] === 'true') {
        $Player1NameFile = './currentPlayers/Player1Name.txt';
        $Player1EndTimeFile = './currentPlayers/Player1EndTime.txt';
        $Player1TimeFile = './currentPlayers/Player1Time.txt';
        // Retrieve the values of the parameters
        $nombreP1 = $_POST['nombreP1'];
        $tiempoP1 = $_POST['tiempoP1'];
        
        // Save the value to the file
        file_put_contents($Player1NameFile, $nombreP1);
        
        //Save time to a file
        $endPlayer1Time = $t + $tiempoP1 * 60 * 1000 + 5000;
        file_put_contents($Player1EndTimeFile, $endPlayer1Time);
        file_put_contents($Player1TimeFile, $tiempoP1);
        // Now you can use these variables as needed
        echo "Jugador 1 Actualizado<br>";
        echo "Nombre: " . $nombreP1 . "<br>";
        echo "Tiempo: " . $tiempoP1 . "minutos. <br><hr>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 1 no actualizado<br><hr>";
    }

    // Check if the parameters exist in the request
    if (isset($_POST['Jugador2Checkbox']) && $_POST['Jugador2Checkbox'] === 'true') {
        $Player2NameFile = './currentPlayers/Player2Name.txt';
        $Player2EndTimeFile = './currentPlayers/Player2EndTime.txt';
        $Player2TimeFile = './currentPlayers/Player2Time.txt';
        // Retrieve the values of the parameters
        $nombreP2 = $_POST['nombreP2'];
        $tiempoP2 = $_POST['tiempoP2'];
        
        // Save the value to the file
        file_put_contents($Player2NameFile, $nombreP2);
        //Save time to a file
        $endPlayer2Time = $t + ($tiempoP2 * 60 * 1000 + 5000);
        file_put_contents($Player2EndTimeFile, $endPlayer2Time);
        file_put_contents($Player2TimeFile, $tiempoP2);
        // Now you can use these variables as needed
        echo "Jugador 2 Actualizado<br>";
        echo "Nombre: " . $nombreP2 . "<br>";
        echo "Tiempo: " . $tiempoP2 . "minutos. <br><hr>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 2 no actualizado<br><hr>";
    }

    // Check if the parameters exist in the request
    if (isset($_POST['Jugador3Checkbox']) && $_POST['Jugador3Checkbox'] === 'true') {
        $Player3NameFile = './currentPlayers/Player3Name.txt';
        $Player3EndTimeFile = './currentPlayers/Player3EndTime.txt';
        $Player3TimeFile = './currentPlayers/Player3Time.txt';
        // Retrieve the values of the parameters
        $nombreP3 = $_POST['nombreP3'];
        $tiempoP3 = $_POST['tiempoP3'];
        
        // Save the value to the file
        file_put_contents($Player3NameFile, $nombreP3);
        
        //Save time to a file
        $endPlayer3Time = $t + ($tiempoP3 * 60 * 1000 + 5000);
        file_put_contents($Player3EndTimeFile, $endPlayer3Time);
        file_put_contents($Player3TimeFile, $tiempoP3);

        // Now you can use these variables as needed
        echo "Jugador 3 Actualizado<br>";
        echo "Nombre: " . $nombreP3 . "<br>";
        echo "Tiempo: " . $tiempoP3 . "minutos. <br><hr>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 3 no actualizado<br><hr>";
    }

    // Check if the parameters exist in the request
    if (isset($_POST['Jugador4Checkbox']) && $_POST['Jugador4Checkbox'] === 'true') {
        $Player4NameFile = './currentPlayers/Player4Name.txt';
        $Player4EndTimeFile = './currentPlayers/Player4EndTime.txt';
        $Player4TimeFile = './currentPlayers/Player4Time.txt';
        // Retrieve the values of the parameters
        $nombreP4 = $_POST['nombreP4'];
        $tiempoP4 = $_POST['tiempoP4'];
        
        // Save the value to the file
        file_put_contents($Player4NameFile, $nombreP4);
        
        //Save time to a file
        $endPlayer4Time = $t + ($tiempoP4 * 60 * 1000 + 5000);
        file_put_contents($Player4EndTimeFile, $endPlayer4Time);
        file_put_contents($Player4TimeFile, $tiempoP4);

        // Now you can use these variables as needed
        echo "Jugador 4 Actualizado<br>";
        echo "Nombre: " . $nombreP4 . "<br>";
        echo "Tiempo: " . $tiempoP4 . "minutos. <br><hr>";
    } else {
        // Handle case where parameters are missing
        echo "Jugador 4 no actualizado<br><hr>";
    }

    file_put_contents('./currentPlayers/LastUpdateTime.txt', $t);
} 
?>
</body>
</html>

