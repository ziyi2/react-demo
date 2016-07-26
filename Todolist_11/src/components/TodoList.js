
import React from 'react';
import ReactDOM from 'react-dom';


//ES6
class TodoList extends React.Component {
	// //定义TodoList类的构造函数
	constructor() {
		//调用父类构造函数
		super(); 
		this.state = {};
	}

	//组件渲染
	render() {
		return (
            <div className="todo-wrap">
               <h1>React Hello!</h1>
            </div>
        );
	}
}

var to_do_list = document.getElementById('to-do-list');
ReactDOM(<TodoList/>,to_do_list);


