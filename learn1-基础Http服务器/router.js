function route(pathname, handle) {
    console.log('请求地址是：', pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No found is ' + pathname);
        return "404 Not Found"
    }
}

exports.route = route;