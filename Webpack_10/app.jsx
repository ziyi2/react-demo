var React = require('react');
var ReactDOM = require('react-dom');

//var Hello1 = require('./Hello1.jsx');

//var hello1 = <Hello1/>;



var IncludeHello = require('./IncludeHello.jsx');

var includeHello = <IncludeHello/>;
var container = document.getElementById('container');
ReactDOM.render(includeHello,container);



