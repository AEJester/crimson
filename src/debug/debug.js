
var fs = require("fs");
var cmds = require("../commands.json");
const { EOL } = require("os");
function clock(start) {
    if ( !start ) return process.hrtime();
    var end = process.hrtime(start);
    return Math.round((end[0]*1000) + (end[1]/1000000));
}
module.exports = (path) => {
    var start = clock();
    path = path.replace(/::/g, " ");
    var file = path.split("/");
    if ("."+file[file.length-1].split(".")[1] !== ".crm") {
        console.log("ERROR! The file must be a .crm file.");
        return;
    }
    var data = fs.readFileSync(path, "utf8");
    data = data.split(EOL);
    for (var i = 0; i < data.length; i++) {
        data[i] = data[i].split(" ");
    }
    var toss = false;
    B: for (var x = 0; x < data.length; x++){
        A: for (var i = 0; i < cmds.commands.length; i++) {
            if (data[x][0].toLocaleLowerCase() !== cmds.commands[i]) {
                toss = true;
            } else {
                toss = false;
                break A;
            }
        }
    }
    if (toss == true) {
        console.log("Error on line "+(x+1)+" in file '"+file[file.length-1]+"':\n\n\n'"+data[x][0]+"' is not a valid statement.")
        return;
    }
    var duration = clock(start);
    console.log("Test ran successfully! Time taken: \n\n"+duration+"ms\n\nFile tested: \n\n"+file[file.length-1]+"\n\nYour code looks good!")
}