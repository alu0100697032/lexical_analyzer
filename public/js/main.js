$(document).ready(function(){
    $("#PARSE").click(function(){
        main();
    });
});
/*Object.prototype.error = function (message, t) {
    t = t || this;
    t.name = "SyntaxError";
    t.message = message;
    throw t;
};*/
function main() {
    var parse = make_parse();


    var source = document.getElementById('INPUT').value;
    var string, tree;
    try {
        tree = parse(source);
        
        //string = JSON.stringify(tree, ['type', 'value', 'from', 'to'],  4);
        string = JSON.stringify(tree, ['key', 'name', 'message',
             'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    } catch (e) {
        string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    }
    $("#OUTPUT").css("display", "block");
    document.getElementById('OUTPUT').innerHTML = string.replace(/&/g, '&amp;').replace(/[<]/g, '&lt;');
};

