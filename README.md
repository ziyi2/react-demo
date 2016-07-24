## React - Demo
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

### JSX

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

>提示: 使用HTML自带的属性时, 由于`class`和`for`是JavaScript关键字,所以要使用`className`和`htmlFor`代替.

#### Event of Component

``` javascript
var Hello = React.createClass({
    handleClick: function(event){
        alert(this.props.name);
    },
    render: function(){
        return <p onClick={this.handleClick}>Hello,Click Me!</p>
    }
});

var hello = <Hello name='React'/>;
var container = document.getElementById('container');
ReactDOM.render(hello,container);
```

>提示: 自动绑定组件所有事件的作用于, 不要这样使用 `onClick={this.handleClick.bind(this)}`

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

| Function      |    describe |   
| :-------- | :------ |
| getDefaultProps    |   对于组件类来说只调用一次,实例之间共享引用 | 
| getInitialState    |   对于组件的每个实例来说,只会调用一次,初始化每个实例特有的状态,必须返回一个对象或者null | 
| componentWillMount    |   完成首次渲染之前被调用,render之前最后一次修改状态的机会 | 
| render    |   创建一个虚拟的DOM,只要一个顶层组件,不允许修改状态和DOM输出,只能通过props和state访问数据,可以返回null,false或者任何React组件 | 
| componentDidMount    |   render渲染完成真实的DOM后触发,可以修改和操作真正的DOM,可以通过`this.getDOMNode()`方法访问真实DOM |
 

>提示: 按从上到下依次触发. 注意组件类和组件的每个实例的调用情况,`getDefaultProps`在所有的组件来说只会调用一次,而`getInitialState`对于每个组件实例来说都会调用一次.

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

| Function      |    describe |   
| :-------- | :------ |
|  componentWillReceiveProps  | 父组件修改属性之前子组件的该属性触发,可以修改新属性,修改状态   | 
| shouldComponentUpdate   | 返回false会阻止render调用,比如state改变但是不需要重新渲染,使用需谨慎   | 
|  componentWillUpdate  |  不能修改属性和状态,在render之前接收到新的props和state进行执行  | 
| render    |   创建一个虚拟的DOM,只要一个顶层组件,不允许修改状态和DOM输出,只能通过props和state访问数据,可以返回null,false或者任何React组件 | 
|  componentDidUpdate  | render渲染完成真实的DOM后触发,可以修改DOM,可以通过`this.getDOMNode()`方法访问真实DOM   |
 

``` javascript

//Hello Componenet
var Hello = React.createClass({
    componentWillReceiveProps: function(){
        console.log("Hello componentWillReceiveProps");
    },

    shouldComponentUpdate: function(){
        console.log("Hello shouldComponentUpdate");
        return true;
    },

    componentWillUpdate: function(){
        console.log("Hello componentWillUpdate");
    },

    render: function(){
        console.log("Hello render");
        return <p>Hello, {this.props.name ? this.props.name : "Wrold"}!</p>
    },

    componentDidUpdate: function(){
        console.log("Hello componentDidUpdate");
    }
});

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
        return (
            <div>
                <Hello name={this.state.name} />
                <br/>
                <input type="text" onChange={this.handleChange} />
            </div>  
        )
    }

});
var includeHello = <IncludeHello />;
var container = document.getElementById('container');
ReactDOM.render(includeHello,container);
```
开始控制台输出运行中的函数,此时属性还没变化,所以其他函数还没触发
``` javascript
Hello render
```
当在input元素中输入值触发`name`变化后,控制台输出运行中的函数的执行顺序

```
Hello componentDidUpdate
Hello componentWillReceiveProps
Hello shouldComponentUpdate
Hello componentWillUpdate
Hello render
Hello componentDidUpdate
```


#### Destroy
- componentWillUnmount
>提示: 在组件被销毁之前执行,主要进行一些清理操作,比如计时器和事件监听器等.

``` javascript
$(document).ready(
    function(){
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
        var includeHello = <IncludeHello />;
        var container = document.getElementById('container');
        ReactDOM.render(includeHello,container);
    }
)
```

### Attribute of Component

| Attribute      |     describe |  
| :-------- | :--------| 
| dangerouslySetInnerHTML    |   允许使用HTML字符串,谨慎使用 |  
| refs    |   不能期望从render返回的组件实例中得到的是真实的已渲染的DOM元素,因为render返回的组件实例只是特定描述,或者说只是一个DOM元素的快照,例如想要给input元素一个focus焦点,不能期望从render返回的组件的input中获取焦点,因为它还只是input的一个描述,而不是真正的input实例,真正的input实例可以通过refs属性访问,当然refs属性也可以在组件中使用,通过refs可以访问底层的真实的DOM节点而不是虚拟DOM |  
|props|数据属性|
|state|一旦改变(其实就是比较组件diff)会重新自动重新渲染组件,不同的state对应不同的render,state改变会触发内在的很多钩子函数|
|key|节点的比较,例如列表,本来有列表1,添加列表2,若没有key,则会删除列表1(节点),重新生成列表1和列表2,若给出唯一标识key,则能够判断新状态state的列表1是旧状态的列表1,则不会删除节点,提升性能|

#### ...(ES6)
``` javascript
$(document).ready(
    function(){
        //Hello Componenet
        var Hello = React.createClass({

            render: function(){
                console.log("Hello render");
                return <p>Hello, {this.props.name1 + ' ' + this.props.name2}!</p>
            }
        });
        
        //IncludeHello Componenet
        var IncludeHello = React.createClass({
            getInitialState: function(){
                return {
                    name1: 'name1',
                    name2: 'name2'
                }
            },

            handleChange: function(event){
                this.setState({
                    name1: event.target.value,
                    name2: event.target.value
                });
            },
            
            render: function(){
                return (
                    <div>
                        <Hello {...this.state} />
                        <br/>
                        <input type="text" onChange={this.handleChange} />
                    </div>  
                )
            }

        });
        var includeHello = <IncludeHello />;
        var container = document.getElementById('container');
        ReactDOM.render(includeHello,container);
    }
)
```

#### state props
- state
只和组件本身有关系.由自己维护,,和父组件和子组件都没关系
- props
组件本身不能修改,但是可以由父组件修改或者修改子组件的属性值

>提示: **组件在运行时需要修改的数据就是状态!**

### Form

#### 可控表单

``` javascript
var ControlForm = React.createClass({
    getInitialState: function(){
        return {
            helloTo: "Hello World!"
        };
    },

    handleChange: function(event){
        this.setState({
            helloTo: event.target.value
        });
    },

    submitHandler: function(event){
        event.preventDefault();
        alert(this.state.helloTo);
    },

    render: function(){
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    value={this.state.helloTo}
                    onChange={this.handleChange}
                />
                <button type="submit">提交</button>
            </form>
        )
    }
});

var myForm = <ControlForm />;
var container = document.getElementById('container');
ReactDOM.render(myForm,container);
```

#### 不可控表单

``` javascript
var UnControlForm = React.createClass({
    submitHandler: function(event){
        event.preventDefault();
        var helloTo = this.refs.helloTo.value;
        alert(helloTo);
    },

    render: function(){
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    ref='helloTo'
                    type="text"
                    defaultValue="Hello React" 
                />
                <button type="submit">提交</button>
            </form>
        )
    }
});

var myForm = <UnControlForm />;
var container = document.getElementById('container');
ReactDOM.render(myForm,container);
```

#### 表单类型

``` javascript
var ControlForm = React.createClass({
    getInitialState: function(){
        return {
            username: 'React',
            gender: 'man',
            checked: true
        };
    },

    handleUserNameChange: function(event){
        this.setState({
            username: event.target.value
        });
    },

    handleGenderChange: function(event){
        this.setState({
            gender: event.target.value
        });
    },

    handleCheckChange: function(event){
        this.setState({
            checked: event.target.checked //这里比较特殊
        });
    },

    submitHandler: function(event){
        event.preventDefault();
        console.log(this.state);
    },

    render: function(){
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor='username'>请输入用户名</label>
                <input 
                    id="username" 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUserNameChange}
                />

                <br/>

                <select value={this.state.gender} onChange={this.handleGenderChange}>
                    <option value="man">男</option>
                    <option value="woman">女</option>
                </select>

                <br/>
                
                <label htmlFor='checkbox'>同意用户协议</label>
                <input 
                    id="checkbox" 
                    type="checkbox" 
                    value="agree" 
                    checked={this.state.checked} onChange={this.handleCheckChange} 
                />

                <button type="submit">提交</button>
            </form>
        )
    }
});

var myForm = <ControlForm />;
var container = document.getElementById('container');
ReactDOM.render(myForm,container);
```

#### 表单事件合并

``` javascript
var ControlForm = React.createClass({
    getInitialState: function(){
        return {
            username: 'React',
            gender: 'man',
            checked: false
        };
    },

    handleChange: function(name,event){
        //方法一
        var newState = {};
        newState[name] = name == "checked" ? event.target.checked : event.target.value;
        console.log(newState);
        this.setState(newState);

        //方法二,使用此方法因为读取event.target.name,所以性能不如方法一读取字符串来的快,并且要在HTML标签中为每个表单元素添加name属性
        var newState = {};
        newState[event.target.name] = event.target.name == "checkbox" ? event.target.checked : event.target.value;
        this.setState(newState);
    },

    submitHandler: function(event){
        event.preventDefault();
        console.log(this.state);
    },

    render: function(){
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor='username'>请输入用户名</label>
                <input 
                    id="username" 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange.bind(this,"username")}
                />

                <br/>

                <select value={this.state.gender} onChange={this.handleChange.bind(this,"gender")}>
                    <option value="man">男</option>
                    <option value="woman">女</option>
                </select>

                <br/>
                
                <label htmlFor='checkbox'>同意用户协议</label>
                <input 
                    id="checkbox" 
                    type="checkbox" 
                    value="agree" 
                    checked={this.state.checked} onChange={this.handleChange.bind(this,"checked")} 
                />

                <button type="submit">提交</button>
            </form>
        )
    }
});

var myForm = <ControlForm />;
var container = document.getElementById('container');
ReactDOM.render(myForm,container);
```

### Mixin

``` javascript
//组件的协同分两种,纵向和横向
//纵向,父组件可以包含子组件
//横向,子组件之间的通用方法可以抽离,比如Ajax,很多组件都需要和后台交互,可以抽离Ajax方法
//Minxin就是一个扩展横向的插件使用方法


//这是一个通用方法,插入到组件以后就相当于在组件中的方法一样 this就指向那个组件实例
var BindingMixin = {
    handleChange: function(key){
        var that = this;
        return function(event){
            var newState = {};
            newState[key] = event.target.value;
            that.setState(newState); 
        }
    }
};
    
var MinxinExample = React.createClass({
    
    mixins: [BindingMixin],

    getInitialState: function(){
        return {
            text: 'ziyi2',
            comment: 'this is some comment'
        };
    },

    render: function(){
        return (
            <div>
                <input type="text" placeholder="用户名" onChange={this.handleChange('text')} />
                <textarea onChange={this.handleChange('comment')}></textarea>
                <p>{this.state.text}</p>
                <p>{this.state.comment}</p>
            </div>
        );
    }

});

var minxinExample = <MinxinExample />;
var container = document.getElementById('container');
ReactDOM.render(minxinExample,container);
```

### Gulp
Install global and local

``` 
npm install gulp -g
npm install gulp --save
```
Install gulp-react
``` 
npm install gulp-react --save
```
>提示: 该插件是将`.jsx`文件转化为`.js`文件.

Create `gulpfile.js`

``` javascript
var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('jsx', function(){
    gulp.src('./Gulp_8/app.jsx')
        .pipe(react())
        .pipe(gulp.dest('./Gulp_8/'));
});

//设置默认命令
gulp.task('default',['jsx']);
```

执行转化命令

```
gulp
```

### Browserify
浏览器端的代码模块化工具,即可以在浏览器端使用CommonJS规范编写代码,打包成一个.js文件的缺陷

- 暂时用不到的代码也会被打包,体积大,首次加载速度慢
- 只要一个模块更新,整个文件缓存失效

Browserify解决方案: entry point,入口点技术
每个入口点打包一个文件,两个入口点的相同依赖模块单独打包为Common.js
可以接单单个文件问题,代码是增加依赖的维护成本,因为要自己指定入口点

Install

```
npm install browserify --save
```

Install reactify 

```
npm install reactify --save
```
>提示:  该插件与Gulp中的gulp-react功能一样.

Install vinyl-source-stream

```
npm install vinyl-source-stream --save
```
>提示: 把Browserify输出的代码转化为Gulp可以理解的输入代码.


### Webpack

加强版的Browserify, 针对大型的单页应用
 - code splitting
 code splitting可以自动完成模块的处理,比如两个文件require同一文件这种重复的部分可以自己处理,不用像Browserify那样手动完成
 - loader
 loader可以处理各种类型的静态文件,并且支持串联操作


Install 
npm install webpack jsx-loader --save
>提示: jsx-loader和前面的reactify gulp-react功能类似.

创建webpack.config.js

``` javascript
'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './Webpack_10/app.jsx',
    output: {
        path: './Webpack_10/',
        filename: 'app.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            }
        ]   
    }
}
```

