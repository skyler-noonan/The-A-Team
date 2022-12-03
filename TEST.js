//test cases 1012ab22f
assert = chai.assert;

// describe() is a function by which you can define a collection of tests. 
// It takes two parameters, the 1st one is a description of what is being tested, and 
// the 2nd one is a function which contains one or multiple tests each defined by one it().
describe('Testing function generateUsername()', function () {
 

  it('Test 2: the returned value is from type string', () => {
    assert.typeOf(generateUsername(), 'string');
});
  
 
})
