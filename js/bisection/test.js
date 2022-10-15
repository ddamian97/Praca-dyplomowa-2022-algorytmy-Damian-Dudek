const {performance} = require("perf_hooks");

function execute(parameter){
    const {performance} = require('perf_hooks');

    function cosFunc(x, multiplier) {
        return Math.cos(multiplier * x) - x;
    }
    function bisectionMethod(a, b, i, epsilon) {
        if(cosFunc(a, i) == 0){
            return a;
        }
        if(cosFunc(b, i) == 0){
            return b;
        }

        while (b - a > epsilon) {
            let middle = (a + b) / 2;
            if (cosFunc(middle, i) == 0) {
                return middle;
            }
            if (cosFunc(a, i) * cosFunc(middle, i) < 0) {
                b = middle;
            } else {
                a = middle;
            }
        }
        return ((a + b) / 2);
    }
    function operateBisection(b, epsilon, size){
        let result = b;
        let a = 0;

        for (let i = 1; i <= size; i++) {
            result = bisectionMethod(a, b, i, epsilon);
            b = result;
        }

        return result;
    }

    function returnTime(endTime) {
        let milliseconds = parseInt((endTime % 1000) / 100),
            seconds = Math.floor((endTime / 1000) % 60),
            minutes = Math.floor((endTime / (1000 * 60)) % 60),
            hours = Math.floor((endTime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        let time =  hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        return '{ "time": "' + time + '", "performance": "' + endTime + '" }';

    }
    if(true){
        const startTime = performance.now();

        let size = 10000000;
        let epsilon = 0.0000000000000001;
        let b = Math.PI;
        operateBisection(b, epsilon, size)

        const endTime = performance.now();
        // return returnTime(endTime);
        console.log('{ "time": "' + (endTime - startTime) + '" }');
    }else{
        return -1;
    }
}
execute();
