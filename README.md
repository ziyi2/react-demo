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

### Attribute of Component

| Attribute      |     describe |  
| :-------- | :--------| 
| dangerouslySetInnerHTML    |   在JSX中直接插入代码 |  
| refs    |   不能期望从render返回的组件实例中得到的是真实的已渲染的DOM元素,因为render返回的组件实例只是特定描述,或者说只是一个DOM元素的快照,例如想要给input元素一个focus焦点,不能期望从render返回的组件的input中获取焦点,因为它还只是input的一个描述,而不是真正的input实例,真正的input实例可以通过refs属性访问,当然refs属性也可以在组件中使用,通过refs可以访问底层的真实的DOM节点而不是虚拟DOM |  
|props|数据属性|
|state|一旦改变(其实就是比较组件diff)会重新自动重新渲染组件,不同的state对应不同的render,state改变会触发内在的很多钩子函数|
|key|节点的比较,例如列表,本来有列表1,添加列表2,若没有key,则会删除列表1(节点),重新生成列表1和列表2,若给出唯一标识key,则能够判断新状态state的列表1是旧状态的列表1,则不会删除节点,提升性能|

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


