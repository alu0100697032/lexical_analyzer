#Práctica: Analizador Léxico

Contexto:
=========

El objetivo de la práctica es generar un flujo de tokens a partir de un fichero de o texto de entrada.

Usando:
    Html.
    Karma.
    Mocha.
    Chai.
    Blanket.
    JavaScript.
    Travis.
    Gulp.
    Heroku.
    jQuery.
    underscore...

Developers:
============

* Víctor Hernández Pérez: alu0100697032@ull.edu.es   [UserPage](http://alu0100697032.github.io/)
* David Rodríguez González de chaves: alu0100837353@ull.edu.es   [UserPage](http://alu0100837353.github.io/)


Enlaces:
========


* [Heroku](https://lexical-analyzer.herokuapp.com/)
* [Repositorio GitHub](https://github.com/alu0100697032/lexical_analyzer)

Recursos utilizados:
=======

* [Chai](http://chaijs.com/)
* [Mocha](http://mochajs.org/)
* [Karma](http://karma-runner.github.io/0.12/index.html)
* [Blanket](http://blanketjs.org/)
* [Travis](https://travis-ci.org)
* [Underscore](http://underscorejs.org/)
* [LocalStorage](https://campusvirtual.ull.es/1415/mod/page/view.php?id=191243)
* [jQuery](http://jquery.com/)
* [jQuery-Tutorial](http://www.w3schools.com/jquery/default.asp)
* [BootStrap](http://getbootstrap.com/)
* [Heroku](https://www.heroku.com/)


Source:
=======

Hemos partido de la siguiente base:

Lab: Lexical Analyzer for a Mini JavaScript language
Fill the empty/underscore gaps in each file.

See Douglas Crockford http://javascript.crockford.com/tdop/tdop.html

* tdop.html Crockford article: contains a description of 
            Vaughn Pratt's Top Down Operator Precedence,
            and describes a parser for Simplified JavaScript in
            Simplified JavaScript.

* index.html loads the scripts and shows the initial input page

* global.css style sheet

* main.js parses the input and displays its AST. 

* parse.js contains the parser for a Simplified JavaScript language. 
           See tdop.html for commentary.

* tokens.js The lexical analyzer. 
            produces an array of token objects from a string.
            You must write this file.