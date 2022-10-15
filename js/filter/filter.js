const arr = [[true,true,true,false],[true,false],[true,true,false,false,false],[true,true,false],[true,true,true,true,false],[true,false,false],[true,true,true,false]]

function tmpFilter(value){
    return value;
}
function checkIndex (arr){
    let min = 100;
    let max = 0;
    let elLength = '';
    arr.forEach(element => {
        elLength = element.length;
        // let positiveElements = element.filter(tmpFilter).length;
        let positiveElements = element.filter(Boolean).length;
        let currentIndex = positiveElements/elLength*100;

        max = (max < currentIndex) ? currentIndex : max;
        min = (min > (currentIndex)) ? currentIndex : min;
    });
    return [min, max];
}

index = checkIndex(arr);
console.log(index);
