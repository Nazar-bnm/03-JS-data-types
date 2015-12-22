(function() {
    'use strict';

    function getPensionersName(arr) {
        var res = [];
        var i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].age > 65) {
                res.push(arr[i].name);
            }
        }
        return res;
    }
    var arr = [{
        name: 'Vasya',
        age: 13
    }, {
        name: 'Vasiliy',
        age: 66
    }, {
        name: 'Kolya',
        age: 20
    }, {
        name: 'Mykola',
        age: 80
    }];
    console.log(getPensionersName(arr));
})();