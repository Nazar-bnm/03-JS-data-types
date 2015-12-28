(function() {
    'use strict';

    function getPensionersName(arr) {
        var res = [];
        var i;
        arr.forEach(function(item, i, arr) {
            if (item.age > 65) {
                res.push(item.name);
            }
        });
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
    }, {
        name: 'Ivan',
        age: 65
    },{
        name: 'Masha',
        age: 25
    }, {
        name: 'Maria',
        age: 71
    }];
    console.log(getPensionersName(arr));
})();