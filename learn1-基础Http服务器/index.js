const server = require('./server');
const route = require('./router');
const handleReq = require('./requestHandler');

let handle = {};
handle['/'] = handleReq.start;
handle["/start"] = handleReq.start;
handle["/upload"] = handleReq.upload;

server.createServer(handle, route.route)