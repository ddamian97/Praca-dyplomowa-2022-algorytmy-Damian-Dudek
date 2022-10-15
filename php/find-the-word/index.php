<?php
header('Access-Control-Allow-Origin: *');
ini_set('memory_limit', '-1');

$parameter = $_GET['value'];
function find_the_word($word, $file_name){
    $file_contents = file_get_contents($file_name);
    $word = '/'.$word.'/';
    if (preg_match_all($word, $file_contents, $matches)) {
        return count($matches[0]);
    }
    return -1;
}

if(isset($parameter) && !empty($parameter)){
    $start = microtime(true);

    $word = $parameter;
    $file_name = 'biblia-tysiaclecia_434mb.txt';
    $results = find_the_word($word, $file_name);

    $end_time = floor((microtime(true) - $start) * 1000);
    echo '{ "time": "' . $end_time . '" }';
}else{
    echo "-1";
}
