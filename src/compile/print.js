var fs = require("fs");
module.exports = (line) => {
    var str = "";
    for (var i = 1; i < line.length; i++) {
        str+=line[i]+" ";
    }
    console.log(str);
}