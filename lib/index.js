// Our function should accept a string and return all values that exist inside double curly braces as an array

module.exports = {

    extractTemplateValues: function(input){

      var results = [], re = /{{([^}]+)}}/g, text;

      while(text = re.exec(input)) {
        results.push(text[1]);
      }

      return results;
    }
}
