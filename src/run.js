var fs = require("fs");
var cmds = require("./commands.json");
const print = require("./compile/print");
const variable = require("./compile/var")
module.exports = (path) => {
    path = path.replace(/::/g, " ");
    var data = fs.readFileSync(path, "utf8");
    data = data.split("\r\n");

    for (var i = 0; i < data.length; i++) {
        data[i] = data[i].split(" ");
    }
    var file = path.split("/");
    var toss = false;
    B: for (var x = 0; x < data.length; x++){
        A: for (var i = 0; i < cmds.commands.length; i++) {
            if (data[x][0].toLocaleLowerCase() !== cmds.commands[i]) {
                toss = true;
            } else {
                toss = false
            }
        }
    }
    if (toss == true) {
        console.log("Error on line "+(x+1)+" in file '"+file[file.length-1]+"':\n\n\n'"+data[x][0]+"' is not a valid statement.")
        return;
    }
    for (var x = 0; x < data.length; x++){
        if (data[x][0].toLocaleLowerCase() == "print") {
            print(data[x]);
        }
        if (data[x][0].toLocaleLowerCase() == "var") {
            new variable(data[x]).add();
        }
    }

}