var app=require("../controllers/forex");
describe("test",function(){
    it("The function should test the testing function..",function() {
        var value=app.testAuto(3,4);
        expect(value).toBe(7);
    });
});