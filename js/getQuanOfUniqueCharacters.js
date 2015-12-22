(function() {
    "use strict";

    function getQuanOfUniqueCharacters(string) {
        var str = "";
        var i;
        for (i = 0; i < string.length; i++) {
            if (str.indexOf(string[i]) == -1) {
                str += string[i];
            }
        }
        return str.length;
    }
    console.log(getQuanOfUniqueCharacters('muahaha'));
})();