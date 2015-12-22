(function() {
    "use strict";

    function getNumbers(arr) {
        var arrNumber = [];
        var i;
        for (i = 0; i < arr.length; i++) {
            if (!isNaN(parseFloat(arr[i]))) {
                arrNumber.push(parseFloat(arr[i]));
            }
        }
        return arrNumber;
    }
    var arr = ['2', '3', '4', 'das', 500, [], {}];
    console.log(getNumbers(arr));

    function getNumericSum(arr) {
        var numberArr = getNumbers(arr);
        var sum = 0;
        var i;
        for (i = 0; i < numberArr.length; i++) {
            sum += numberArr[i];
        }
        return sum;
    }
    console.log(getNumericSum(arr));
})();