var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../server.js");
    });
    afterAll(() => {
        server.close();
    });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("GET /getLatestCurrency", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/getLatestCurrency", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status Code", () => {            expect(data.status).toBe(200);        });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("GET /getCurrencyByName", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/getCurrencyByName", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("GET /getCurrencyName", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/getCurrencyName", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("GET /sevenDayPredict", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/sevenDayPredict", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("GET /oneMonthPredict", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/oneMonthPredict", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("GET /oneYearPredict", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:7777/oneYearPredict", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("POST /userLogin", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:7777/userLogin", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(200);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("POST /register", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:7777/register", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(500);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
    describe("PUT /updateUser/:currentUser", () => {
        var data = {};
        beforeAll((done) => {
            Request.put("http://localhost:7777/updateUser", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;               
                done();
            });
        });
        it("Status Code", () => {    expect(data.status).toBe(404);       });
        it("Body", () => {            expect(data.body).JSON;        });
    });
});