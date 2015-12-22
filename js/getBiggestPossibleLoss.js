(function() {
    'use strict';

    function getBiggestPossibleLoss(arr) {
        var t0 = arr[0];
        var t1 = arr[1];
        var selling;
        var res;
        var i;
        for (i = 2; i < arr.length; i++) {
            if (arr[i] <= t1) {
                t1 = arr[i];
                selling = i;
            }
        }
        for (i = 1; i < selling; i++) {
            if (arr[i] > t0) {
                t0 = arr[i];
            }
        }
        if (t0 > t1) {
            res = t1 - t0;
        } else {
            res = 0;
        }
        return res;
    }
    console.log(getBiggestPossibleLoss([3, 2, 4, 2, 1, 5]));
    console.log(getBiggestPossibleLoss([1, 2, 4, 4, 5]));
})();