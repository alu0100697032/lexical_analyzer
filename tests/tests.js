var assert = chai.assert;

suite('lexical_analyzer', function() {
    
    setup(function() {
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['tests/index.html'];
            csv_text = document.getElementById('csv_text');
            tabla = document.getElementById('tabla');
        }
    });
    
    suite('Tokens Flows', function() {
        test('One Statement, one token', function() {
            input = $("#INPUT");
            input.value = 'var a = "a";';
            main();
            assert.deepEqual(OUTPUT.value, '{"value": "=","arity": "binary","first": { "value": "a", "arity": "name" },"second": {"value": "a","arity": "literal"}}')
        });
        
         test('One full example', function() {
            INPUT.value = 'var a = "hello"; // initialize a  var b = function(x) { var c = 3; return x+c; };';
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