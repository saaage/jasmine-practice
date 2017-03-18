let indexController = require('../lib/index.js');

let testString = "Discard {eskimo}, return {{elephant}}, also return {{working!}}, discard {poop}.";

describe("Extraction function", function(){

  // if indexController.extractTemplateValues(testString) does not throw error, then expectation is met
  it("accepts a string as an agrument", function() {
    expect(typeof(indexController.extractTemplateValues(testString)[0])).toBe('string');
  });

  // pass testString to indexController.extractTemplateValues() - should return elephant and working!
  it("pulls values from double curly braces ", function() {
    expect(indexController.extractTemplateValues(testString)).toEqual(['elephant','working!']);
  });

  // use Object.prototype.toString.call on our function to see what type of object it returns. Should be an
  //  array!
  it("returns an array ", function (){
    expect(Object.prototype.toString.call(indexController.extractTemplateValues())).toBe('[object Array]');
  });

});
