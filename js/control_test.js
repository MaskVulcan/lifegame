describe("Update", function  () {
    it("should be a function",function (){
        assert.isFunction(Update);
    });
    it("should have no arguments", function () {
        assert.equal(Update.length, 1);
    });
});

describe("UpdateStatus", function  () {
    it("should be a function",function (){
        assert.isFunction(Update);
    });
    it("should have no arguments", function () {
        assert.equal(Update.length, 1);
    });
    context('Change Status',function () {
        var data = {data:{
            virus:[1,1,1,1],
            width:2,
            height:2
        }}
        var data2 = {data:{
            virus:[0,0,0,0],
            width:2,
            height:2
        }}
        var data3 = {data:{
            virus:[1,0,1,1,0,1,1,1,0],
            width:3,
            height:3
        }}
        it("should change status",function () {
            assert.sameDeepMembers(UpdateStatus(data),[1,1,1,1]);
        })
        it("should change status",function () {
            assert.sameDeepMembers(UpdateStatus(data2),[0,0,0,0]);
        })
        it("should change status",function () {
            assert.sameDeepMembers(UpdateStatus(data3),[0,0,0,1,1,0,1,1,0]);
        })
    });
});

describe("showData", function  () {
    it("should be a function",function (){
        assert.isFunction(showData);
    });
    it("should have no arguments", function () {
        assert.equal(showData.length, 1);
    });
    context('showData',function () {
        var data = {data:{
            virus:[1,1,1,1],
            width:2,
            height:2
        }}
        var data2 = {data:{
            virus:[0,0,0,0],
            width:2,
            height:2
        }}
        var data3 = {data:{
            virus:[1,0,1,1,0,1,1,1,0],
            width:3,
            height:3
        }}
        it("should show alive",function () {
            assert.equal(showData(data),4);
        })
        it("should show alive",function () {
            assert.equal(showData(data2),0);
        })
        it("should show alive",function () {
            assert.equal(showData(data3),6);
        })
    });
});

describe("drawCanvas", function  () {
    it("should be a function",function (){
        assert.isFunction(drawCanvas);
    });
    it("should have no arguments", function () {
        assert.equal(drawCanvas.length, 1);
    });
});

describe("Start", function  () {
    it("should be a function",function (){
        assert.isFunction(Start);
    });
    it("should have no arguments", function () {
        assert.equal(Start.length, 1);
    });
});

describe("Stop", function  () {
    it("should be a function",function (){
        assert.isFunction(Stop);
    });
    it("should have no arguments", function () {
        assert.equal(Stop.length, 1);
    });
    context('showData',function () {
        var data = {data:{
            virus:[1,1,1,1],
            width:2,
            height:2
        }}
        var data2 = {data:{
            virus:[0,0,0,0],
            width:2,
            height:2
        }}
        var data3 = {data:{
            virus:[1,0,1,1,0,1,1,1,0],
            width:3,
            height:3
        }}
        it("should stop",function () {
            assert.equal(Stop(data),0);
        })
        it("should stop",function () {
            assert.equal(Stop(data2),0);
        })
        it("should stop",function () {
            assert.equal(Stop(data3),0);
        })
    });
});