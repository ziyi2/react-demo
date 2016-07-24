## React - HelloReact
### HTML
- react.js
- react-dom.js
- bower.js
``` vbscript-html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JSX</title>
    <script type="text/javascript" src="public/react/react.js"></script>
    <script type="text/javascript" src="public/react/react-dom.js"></script>
    <script src="public/react/browser.min.js"></script>
</head>
<body>
    <div id='container'></div>
    
    <script type="text/babel">
        //这里放置JSX代码
    </script>
</body>
</html>
```

### Hello React
 -  React.createClass(Obj)
 -  ReactDOM.render(component/HTML DOM,fatherDom)
``` javascript
var Hello = React.createClass({
    render: function(){
        return <p>Hello,React!</p>
    }
});
    
var hello = <Hello />;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```

### How To Use JSX
In`{}`you can use JavaScript, but not include `if else` directly
``` javascript
var Hello = React.createClass({
    render: function(){
        return <p>Hello,{this.props.name ? this.props.name : 'World'}!</p>
    }
});

var hello = <Hello name='React'/>;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```
Or you can use Function just like this

``` javascript
var Hello = React.createClass({
    getName: function(){
        if(this.props.name)
            return this.props.name;
        else
            return "World"; 
    },

    render: function(){
        var name = this.getName();
        return <p>Hello,{name}!</p>
    }
});

var hello = <Hello name='React'/>;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```
We can't use `if else` in `{}`directly,but we can use `||`

``` javascript
var Hello = React.createClass({
    render: function(){
        return <p>Hello,{this.props.name || "World" }!</p>
    }
});

var hello = <Hello name='React'/>;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```

User Function expression in `{}`, so you can usr all JavaScript
    

``` javascript
var Hello = React.createClass({
    render: function(){
        return <p>Hello,{
            (function (obj){
                if(obj.props.name)
                    return obj.props.name
                else
                    return "World"
            }(this))
        }!</p>
    }
});

var hello = <Hello name='React'/>;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```



### Component Lifecycle

- Init
- Running
- Destroy

#### Init
- getDefaultProps 
- getInitialState
- componentWillMount
- render
- componentDidMount

| Col1      |    Col2 |   
| :-------- | :------ |
| getDefaultProps    |   只调用一次,实例之间共享引用 | 
| getInitialState    |   初始化每个实例特有的状态,必须返回一个对象或者null | 
| componentWillMount    |   render之前最后一次修改状态的机会 | 
| render    |   只要一个顶层组件,不允许修改状态和DOM输出,只能访问props和state | 
| componentDidMount    |   render渲染完成真实的DOM后触发,可以修改和操作真正的DOM |
 

>提示: 按从上到下依次触发.

``` javascript
var Hello = React.createClass({

    getDefaultProps: function(){
        console.log("getDefaultProps");
    },

    getInitialState: function(){
        console.log("getInitialState");
        return null;    
    },

    componentWillMount: function(){
        console.log("componentWillMount");
    },

    render: function(){
        console.log("render");
        return <p>Hello,{
            (function (obj){
                if(obj.props.name)
                    return obj.props.name
                else
                    return "World"
            }(this))
        }!</p>
    },

    componentDidMount: function(){
        console.log("componentDidMount");
    }
});

var hello = <Hello name='React'/>;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```

查看控制台
``` javascript
getDefaultProps
getInitialState
componentWillMount
render
componentDidMount
```
加载jquery

``` javascript
$(document).ready(
    function(){
        
        var Hello = React.createClass({

            getDefaultProps: function(){
                console.log("getDefaultProps");
                return {
                    name: 'ziyi2'
                };
            },

            getInitialState: function(){
                console.log("getInitialState");
                return {
                    ready:"false"
                };
            },

            componentWillMount: function(){
                console.log("componentWillMount");
                this.setState({
                    ready:"true"
                });
            },

            render: function(){
                console.log("render");
                return <p>Hello,{
                    (function (obj){
                        if(obj.props.name)
                            return obj.props.name
                        else
                            return "World"
                    }(this))
                }! the state: {this.state.ready}</p>
            },

            componentDidMount: function(){
                console.log("componentDidMount");
                $("#container").append("really Dom Oper!");
            }
        });

        var hello = <Hello />;
        var container = document.getElementById('container');
        ReactDOM.render(hello,container);
    }
)
```

#### Running
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

#### Destroy
- componentWillUnmount


