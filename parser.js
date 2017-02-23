const fs = require('fs');
const readline = require('readline');

module.exports.fileToArray = function(path, debug) {
    return new Promise(function(resolve, reject) {
        fs.exists(path, (exists) => {
            if (exists) {
                var stream = fs.createReadStream(path);
                stream.on('error', (err) => {
                    reject(err);
                });

                var rl = readline.createInterface({
                    input: stream
                });

                var arr = new Array();
                rl.on('line', (line) => {
                    arr.push(line);
                    if (debug) {
                        console.log("New Line : " + line);
                    }
                });
                rl.on('close', () => {
                    resolve(arr);
                });

            } else {
                reject("file not found");
            }
        });
    });
}
