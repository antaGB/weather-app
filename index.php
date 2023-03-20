<?php
require "weather.php";

?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anta Weather</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="date-container">
    <div id="day"></div>
    <div id="date"></div>
  </div>
  <div class="clock-container">
    <div id="hour"></div>
    <div class="colon">:</div>
    <div id="minute"></div>
    <div class="colon">:</div>
    <div id="second"></div>
  </div>
  <div class="weather-container">
    <div class="temp"><?= $temp ?>&deg;<span class="deg">C</span></div>
    <div class="desc"><?= $description ?></div> 
    <img class="icon" src="<?= $icon ?>" alt="#"> 
  </div> 
  <script src="./time.js"></script>
</body>
</html>