const expect = require('expect.js');
const parser = require('../parser.js');
describe("Reading File", () => {
    it("Reading File", () => {
        return new Promise(function(resolve, reject) {
            parser.fileToArray("./test/dummytext.txt").then((arr) => {
                expect(arr).to.be.an('array');
                resolve(arr);
            }, (err) => {
                reject(err);
            });

        });
    });
});
