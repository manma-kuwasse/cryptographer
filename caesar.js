'use strict';
//シーザー暗号
function encode(val, key) {
    var text = document.getElementById("textarea");
    const val = text.value;
        console.log(val);
        var result = "";
        val = encodeURIComponent(val);
        for (var i = 0; i < val.length; i++) {
            result += String.fromCharCode(val.charCodeAt(i) + key);
        }
        text.innerHTML = "result";
        return result;
};

//シーザー暗号復号
function decode(val, key) {
    var text = document.getElementById("textarea");
    const val = text.value;
    var key = document.getElementById('key');
    console.log(val);
    var result = "";
    for (var i = 0; i < val.length; i++) {
        result += String.fromCharCode(val.charCodeAt(i) - key);
    }
    text.innerHTML = "result";
    return decodedURIComponent(result);
};

module.exports = {
    encode,
    decode
}