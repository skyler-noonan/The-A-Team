//test cases 
assert = chai.assert;

// describe() is a function by which you can define a collection of tests. 
// It takes two parameters, the 1st one is a description of what is being tested, and 
describe('Testing Functionality', function () {
 

  it('Test: These functions return string', () => {
    assert.typeOf(generateUsername(), 'string');
    assert.typeOf(generateDescription(), 'string');
    assert.typeOf(generateNotifications(), 'string');
    assert.typeOf(generateHashtag(), 'string');
    assert.typeOf(generateProfilePicture(), 'string');
    assert.typeOf(generatePostPicture(), 'string');
    assert.typeOf(generateComment(), 'string');
  







});

it('Test: These functions\' returned value is < 1001', () => {
    for (var i = 1; i <= 10000; i++) {
        assert(generateNumLikes() < 1001);
        assert(generateNumFollowers() < 1001);
        assert(generateNumFollowing() < 1001);

        
    }
});

it('Test: These functions return number', () => {
    assert.typeOf(generateNumLikes(), 'number');
    assert.typeOf(generateNumFollowers(), 'number');
    assert.typeOf(generateNumFollowing(), 'number');

});




  
 
})
