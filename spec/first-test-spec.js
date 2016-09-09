const Jasmine = require('jasmine'),
      jasmine = new Jasmine(),
      frisby = require('frisby');

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.configureDefaultReporter({
    showColors: true
});

describe("Basic connection test", function(){
  console.log("waaaat");
  it("should be able to connect to the app", function(){
    console.log("wat");
  });
});

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});

jasmine.execute();
