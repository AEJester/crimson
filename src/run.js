var fs = require("fs");
module.exports = (path) => {
    path = path.replace(/::/g, " ");
    var data = fs.readFileSync(path, "utf8");
    console.log(data);
}