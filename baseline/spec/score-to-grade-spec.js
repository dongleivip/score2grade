describe('score-to-grade-spec', function() {

  var s = 95;
  var a = 85;
  var b = 75;
  var c = 65;
  var d = 55;
  var neg = -10;
  var large = 102;
  var full = 100;
  var zero = 0;

  it('95分', function() {
    var result = scrore_to_grade(s);
    expect(result).toEqual("S");
  });

  it('100分', function() {
    var result = scrore_to_grade(full);
    expect(result).toEqual("S");
  });
  
  it('0分', function() {
    var result = scrore_to_grade(zero);
    expect(result).toEqual("D");
  });
  
  it('65分', function() {
    var result = scrore_to_grade(d);
    expect(result).toEqual("D");
  });
  
  it('75分', function() {
    var result = scrore_to_grade(c);
    expect(result).toEqual("C");
  });
  
  it('80分', function() {
    var result = scrore_to_grade(80);
    expect(result).toEqual("A");
  });
  
  it('-10分', function() {
    var result = scrore_to_grade(neg);
    expect(result).toEqual("-");
  });
  
  it('105分', function() {
    var result = scrore_to_grade(large);
    expect(function(){
    	scrore_to_grade(large);
    }).toThrowError("throw exception!");
  });
  
  it('45分', function() {
    var result = scrore_to_grade(45);
    expect(result).toEqual("D");
  });
  
});
