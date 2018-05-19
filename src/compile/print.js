var fs = require("fs");
module.exports = (line) => {
    var str = "";
    for (var i = 1; i < line.length; i++) {
        if (line[i][0] == "{" && line[i][line[i].length-1] == "}") {
            var data = fs.readFileSync("./heap.txt", "utf8");
            data = data.split("\r\n");
            for (var i = 0; i < data.length; i++) {
                data[i] = data[i].split(",")
            }
            for (var i = 0; i < data.length; i++) {
                for (var t = 0; t < data[i].length; t++) {
                    if (line[i].replace("{").replace("}") == data[i][0]) {
                        str+=data[i][1]+" ";
                    }
                }
            }
        } else {
            str+=line+" ";
        }
    }
    console.log(str);
}