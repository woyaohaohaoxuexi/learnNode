const http = require('http');
const url = require('url');
//1、第一种写法 
// http.createServer((req, res) => {   // 千万记得，响应在前，请求在后。
    
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World')
//     res.end()
// }).listen(8080)

// 第二种写法
// function onRequest(request, response) {
//     console.log('获取请求');
    
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write('Hello World');
//     response.end()
// }
// let server = http.createServer(onRequest);

// server.listen(8080);
// console.log('服务启动');

// 第三种写法
function createServer(handle, route) {
    http.createServer((request, response) => {
        let pathName = url.parse(request.url).pathname;

        response.writeHead(200, { "Content-Type": "text/plain" });
        let content = route(pathName, handle);
        response.write(content);
        response.end();
    }).listen(8080);
}


exports.createServer = createServer
