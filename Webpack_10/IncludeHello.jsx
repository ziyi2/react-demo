var React = require('react');
var Hello = require('./Hello.jsx');

//IncludeHello Componenet
var IncludeHello = React.createClass({
	getInitialState: function(){
		return {
			name: ''
		}
	},

	handleChange: function(event){
		this.setState({
			name: event.target.value
		});
	},
	
	render: function(){
		//在input元素中输入'ziyi2'
		if(this.state.name === 'ziyi2'){
			return(
				<div>123</div>
			)
		}
		
		//如果返回<div>123</div>,则Hello组件就会在DOM中会卸载随后被销毁,此时可触发销毁期的钩子函数
		return (
			<div>
				<Hello name={this.state.name} />
				<br/>
				<input type="text" onChange={this.handleChange} />
			</div>	
		)
	}

});


module.exports = IncludeHello;
