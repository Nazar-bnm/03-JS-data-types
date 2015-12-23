(function() {
    'use strict';

    function getBiggestPossibleLoss(arr) {
        var t0;
        var t1;
        var buying;
        var interimResult;
        var res = 0;
        var i;
        var j;
        for (i = 0; i < arr.length; i++) {
            t0 = arr[i];
            for (j = i + 1; j < arr.length; j++) {
                t1 = arr[j];
                interimResult = t1 - t0;
                if (interimResult < res) {
                    res = interimResult;
                }
            }
        }
        return res;
    }
    console.log(getBiggestPossibleLoss([3, 2, 4, 2, 1, 5]));
    console.log(getBiggestPossibleLoss([1, 2, 4, 4, 5]));
    console.log(getBiggestPossibleLoss([1, 2, 4, 4, 5, 1, 100, 50, 4, 110]));
    console.log(getBiggestPossibleLoss([1, 2, 4, 25, 5, 8, 7, 5, 10, 20, 5, 17, 3]));
})();