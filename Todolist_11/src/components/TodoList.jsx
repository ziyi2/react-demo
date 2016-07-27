//var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
	constructor() { //定义App类的构造函数
        super(); //调用父类的构造函数
        this.state = { //定义组件状态
        };
    }
	render(){
    	return <h1>Hello,React!</h1>;
  	}
}

var list_to_do = document.getElementById('list-to-do');
ReactDOM.render(<TodoList/>,list_to_do);
