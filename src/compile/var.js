const fs = require("fs")
module.exports = (line) => {
    this.get = function(name) {
        for (var i = 0; i < this.heap.length; i++) {
            if (this.heap[i].name == name) {
                return heap[i].value;
            }
        }
    }
    this.add = function() {
        var value = "";
        for (var i = 3; i < line.length; i++) {
            value+=line[i];
        }
        var name = line[1];
        var data = fs.readFileSync("./heap.txt", "utf8");
        data = data.split("\r\n");
        data.push(`${name},${value}\r\n`);
        fs.writeFileSync("./heap.txt", data, (err, res) => {
            if (err) console.log(err);
            if (res) console.log(res);
        })
    }
}