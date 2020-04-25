var assert = require("assert");
var request = require("supertest");

var server = require("./../build/bundle").default;

describe("loading express", function () {
  before(function (done) {
    this.timeout(10000);
    server = require("./../build/bundle").default;
    server.start((err) => {
      done(null);
    });
  });

  it("responds to /", function testSlash(done) {
    request(server.httpServer).get("/").expect(200, done);
  });

  after(function (done) {
    server.httpServer.close(done);
  });
});
