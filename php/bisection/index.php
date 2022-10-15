<?php
header('Access-Control-Allow-Origin: *');
ini_set('memory_limit', '-1');

function cos_func($x, $multiplier){
    return cos($multiplier * $x) - $x;
}

function bisection_method($a, $b, $i, $epsilon){
    if(cos_func($a, $i) == 0){
        return $a;
    }
    if(cos_func($b, $i) == 0){
        return $b;
    }

    while ($b - $a > $epsilon) {
        $middle = ($a + $b) / 2;
        if (cos_func($middle, $i) == 0) {
            return $middle;
        }
        if (cos_func($a, $i) * cos_func($middle, $i) < 0) {
            $b = $middle;
        } else {
            $a = $middle;
        }
    }
    return (($a + $b) / 2);
}
function operate_bisection($b, $epsilon, $size){
    $result = $b;
    $a = 0;

    for($i = 1; $i <=$size; $i++){
        $result = bisection_method($a, $b, $i, $epsilon);
        $b = $result;
    }
    return $result;
}
$parameter = $_GET['value'];

if(isset($parameter) && !empty($parameter)){
    $start = microtime(true);
    $size = $parameter;
    $epsilon = 0.0000000000000001;
    $b = M_PI;
    $results = operate_bisection($b, $epsilon, $size);
    $end_time = floor((microtime(true) - $start) * 1000);

    echo '{ "time": "' . $end_time . '" }';
}else{
    echo "-1";
}
