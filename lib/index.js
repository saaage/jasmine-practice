// Our function should accept a string and return all values that exist inside double curly braces as an array

module.exports = {

    extractTemplateValues: function(input){

      // create an array 'results' to hold values we want
      // use regex to identify values that live between '{{' and '}}'
      // use placeholder variable 'text' to temporarily hold the values we want
      var results = [], re = /{{([^}]+)}}/g, text;

      // use exec() to test 'input' for matches, push into 'results' array
      while(text = re.exec(input)) {
        results.push(text[1]);
      }

      return results;
    }
}
