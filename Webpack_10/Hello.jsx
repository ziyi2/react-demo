var React = require('react');

//Hello Componenet
var Hello = React.createClass({

    render: function(){
        console.log("Hello render");
        return <p>Hello, {this.props.name ? this.props.name : "Wrold"}!</p>
    },
    
    componentWillUnmount: function(){
        console.log('componentWillUnmount did!');
    }
    
});


module.exports = Hello;