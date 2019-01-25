function start() {
    console.log('处理开始请求');
    sleep(20000);
    return "Server Start"
}

function upload() {
    console.log('处理上传请求');
    return "Server upload"
}
function sleep(mileseconds) {
    let currentTime = new Date().getTime();
    console.log('循环：', new Date().getTime() < currentTime + mileseconds);
    
    while (new Date().getTime() < currentTime + mileseconds) {
        console.log('阻塞');
        
    }
}
exports.start = start;
exports.upload = upload;