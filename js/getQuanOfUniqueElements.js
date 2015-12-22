(function() {
    "use strict";

    function getQuanOfUniqueElements(arr) {
        var number;
        var res = [];
        var i;
        for (i = 0; i < arr.length; i++) {
            if (res.indexOf(arr[i]) == -1) {
                res.push(arr[i]);
            }
        }
        number = res.length;
        return number;
    }
    var arr = [2, '3', 3, 2, 3, 2, 500, '500'];
    console.log(getQuanOfUniqueElements(arr));
})();