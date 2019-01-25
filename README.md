# learnNode
**学习node记录**
原文 https://www.nodebeginner.org/index-zh-cn.html?utm_source=ourjs.com
### 服务的 Javascript
Javascript 是一门完整的语言，可以使用在不同的上下文中。Node.js 其实就是一种上下文，可以让 Javascript 在服务端运行。

要实现在服务端运行 Javascript ，代码需要先被解释，然后正确的执行。Node.js 的原理就是如此，它使用了Google的 V8虚拟机（
Google 的 Chrome 浏览器使用的Javascript 执行环境），来解释和执行 Javascript。

Node.js 还提供了好多有用的模块。

因此，Node.js 既是一个运行时环境，又是一个库。

### 学习目标
**目标是完成一个完整的基于Node.js 的 web 应用**
#### 需求
* 用户可以通过浏览器访问页面
* 用户访问 http://domain/start 时，可以看到一个欢迎页面，页面有一个上传文件的表单
* 用户可以选择一个图片并提交表单，然后图片会被上传到 http://domain/upload ，完成上传后会在页面展示
#### 需求分析
为了完成上面的需求，需要做到的东西
* 提供 web 页面，所以需要一个 http 服务器
* 对于不同的请求，根据请求地址，服务器给予不同的响应，因此需要一个路由，把请求对于到不用的处理程序中
* 接收到请求之后，对请求进行处理。所以需要 请求处理程序
* 能处理提交的数据，并把数据封装成更友好的格式传递给请求处理程序，因此需要请求数据处理功能。
* 还要展示图片，需要做一些视图逻辑，以便将内容发给给浏览器
* 上传图片，需要提供上传功能

#### 构建应用
组织代码的时候，不要把所有的东西都写到一个文件中，应该划分为一个个模块。然后有一个主文件，可以调用模块。
##### 一个基础的 Http 服务器
新建一个 server.js 用来保存服务模块。
``` javascript {.line-numbers}
// server.js
const http = require('http');
http.createServer((req, res) => {   // 千万记得，响应在前，请求在后。
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Word')
    res.end()
}).listen(8080)
```
然后使用 node server.js　启动服务，在浏览器中输入　`http://localhost:8080` 就可以看到页面展示的 Hello Work
来分析下 server.js 里面的内容：
第一行先引入一个 Node 本身提供的模块 `http`这个模块用来启动 http 服务。
接下来，使用 `http.createServer().lister(8080)`启动了一个http服务并设置监听 8080 端口。
`createServer()`有且只有一个参数，这个参数是一个函数。
#### 服务器是如何响应请求的
回调函数有两个参数`req`与`res`。它们是对象，可以利用它们的方法处理Http请求的细节。我们的代码是: 接收到请求后，使用 `res.writeHead()`方法，发送一个 Http状态码： 200 ，和一个 Http头的内容类型：text/plain。使用 `res.write()`在Http主体中发送文本 "Hello World"。最后使用 `res.end()`完成响应。




