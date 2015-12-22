(function() {
    "use strict";

    function getNumbers(arr) {
        var sum = 0;
        var i;
        for (i = 0; i < arr.length; i++) {
            if (!isNaN(parseFloat(arr[i]))) {
                sum += parseFloat(arr[i]);
            }
        }
        return sum;
    }
    var arr = ['2', '3', '4', 'das', 500, [], {}, "15"];
    console.log(getNumbers(arr));
})();