<?php
header('Access-Control-Allow-Origin: *');
ini_set('memory_limit', '-1');

function Runge_Kutta($t, $h, $v, $g, $step, $steps){
    $prev_v = $v;
    $prev_h = $h;
    for($i = 0; $i < $steps; $i++){
        $h = $prev_h + $prev_v * $step;
        $v = $prev_v - $g * $step;
        $prev_h = $h;
        $prev_v = $v;
    }
    return [$h, $v];
}

$parameter = $_GET['value'];

if(isset($parameter) && !empty($parameter)){
    $start = microtime(true);
    $height0 = 56.0;
    $velocity0 = 5.6;
    $step = 0.00000001;
    $steps = $parameter;
    $g = 9.81;
    $time0 = 0;
    $results = Runge_Kutta($time0, $height0, $velocity0, $g, $step, $steps);
    $end_time = floor((microtime(true) - $start) * 1000);

    echo '{ "time": "' . $end_time . '" }';
}else{
    echo "No arguments!";
}
