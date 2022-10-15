<?php
header('Access-Control-Allow-Origin: *');
ini_set('memory_limit', '-1');
function reducer($accumulator, $current_value){
    $accumulator += $current_value;
    return $accumulator;
}
function sieve($limit)
{
    $bools = [];
    $primes = [];
    for ($i = 1; $i < $limit; $i++) {
        $bools[] = true;
    }

    for ($i = 2; $i < $limit; $i++) {
        if ($bools[$i - 2]) {
            for ($j = $i * 2; $j <= $limit; $j += $i) {
                $bools[$j - 2] = false;
            }
        }
    }

    for ($p = 0; $p < count($bools); $p++) {
        if ($bools[$p]) {
            $primes[] = $p + 2;
        }
    }

    return $primes;
}

$parameter = $_GET['value'];
if(isset($parameter) && !empty($parameter)){
    $start = microtime(true);
    $limit = $parameter;
    $primes_Sieve = sieve($limit);
    $sum = array_reduce($primes_Sieve, "reducer");
    $end_time = floor((microtime(true) - $start) * 1000);

    echo '{ "time": "' . $end_time . '" }';
}else{
    echo "-1";
}
