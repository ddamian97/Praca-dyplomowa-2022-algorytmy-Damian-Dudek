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

    if(parameter){
        const startTime = performance.now();

        let size = parameter;
        let epsilon = 0.0000000000000001;
        let b = Math.PI;
        let results = operateBisection(b, epsilon, size)

        const endTime = performance.now();
        return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
    }else{
        return -1;
    }
}
module.exports = { execute };
