const fs = require("fs")
module.exports = class {
    constructor(line) {
        this.line = line;
        this.value = "";
        for (var i = 3; i < this.line.length; i++) {
            this.value+=this.line[i];
        }
        this.name = this.line[1];
    }
    add() {
        var data = JSON.parse(fs.readFileSync(`${__dirname}/vars.json`, "utf8"));
        for (var i = 0 ; i < data.vars.length; i++) {
            if (data.vars[i].name == this.name) {
                data.vars[i] = {name: this.name, value: this.value};
                return;
            }
        }
        data.vars.push({name: this.name, value: this.value});
        fs.writeFileSync(`${__dirname}/vars.json`, JSON.stringify(data));
    }
}