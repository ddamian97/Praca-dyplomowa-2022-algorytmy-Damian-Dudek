<?php
header('Access-Control-Allow-Origin: *');
ini_set('memory_limit', '-1');

function euclidean($a, $b) {
    if($b != 0){
        $c = $a % $b;
        return euclidean($b, $c);
    }
    return $a;
}

function operate_Euclidean($a, $b, $limit){
    $results = 0;
    for($i = 1; $i <= $limit; $i++){
        $new_a = $a * $i;
        $new_b = $b * $i;
        $results = euclidean($new_a, $new_b);
    }
}

$parameter = $_GET['value'];
if((isset($parameter)) && !empty($parameter)){
    $start = microtime(true);
    $arg1 = 922337203685460;
    $arg2 = 857214;
    $limit = $parameter;
    operate_Euclidean($arg1, $arg2, $limit);
    $end_time = floor((microtime(true) - $start) * 1000);

    echo '{ "time": "' . $end_time . '" }';
}else{
    echo "-1";
}
