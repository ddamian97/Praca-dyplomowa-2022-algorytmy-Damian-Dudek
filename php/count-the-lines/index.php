<?php
header('Access-Control-Allow-Origin: *');
ini_set('memory_limit', '-1');
$parameter = $_GET['value'];
function count_the_lines($name) {
    $file_path = 'https://perfectenschlag.pl/comparison-php/count-the-lines/' . $name;
    $number_of_lines = count(file($file_path));
    return $number_of_lines;
}
if(isset($parameter) && !empty($parameter)){
    $start = microtime(true);

    $file_name = $parameter;
    $results = count_the_lines($file_name);

    $end_time = floor((microtime(true) - $start) * 1000);
    echo '{ "time": "' . $end_time . '" }';
}else{
    echo "-1";
}
