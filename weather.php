<?php
$apiKey=  "471fba3cc1ab18e592991d649bf17449";
$city= "Gianyar";
$url = "http://api.weatherstack.com/current?access_key=$apiKey&query=$city&hourly=1&interval=1";

$response = file_get_contents($url);
$data = json_decode($response, true);

$temp = $data["current"]["temperature"];
$description = $data['current']['weather_descriptions'][0];
$icon = $data['current']['weather_icons'][0];

?>