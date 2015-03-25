var assert = chai.assert;

suite('lexical_analyzer', function() {
    
    
    suite('Tokens Flows', function() {
        test('One Statement, one token', function() {
            input = $("#INPUT");
            input.value = 'var a = "a";';
            main();
            assert.deepEqual(OUTPUT.value, '{"value": "=","arity": "binary","first": { "value": "a", "arity": "name" },"second": {"value": "a","arity": "literal"}}')
        });
    });
    suite('Error', function() {
        test('Input Error', function() {
            INPUT.value = 'var a = "a"';
            main();
            assert.deepEqual(OUTPUT.value, '{"value": "=","arity": "binary","first": { "value": "a", "arity": "name" },"second": {"value": "a","arity": "literal"}}')
        });
    });
});