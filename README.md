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

>提示: 按从上到下依次触发.






#### Running
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

#### Destroy
- componentWillUnmount


