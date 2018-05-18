var http = require("http");
var counter=0;
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
	//设置编码
     response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
     if(request.url==("/"))
     response.write("数字为："+  ++counter);
     response.end();
 
}).listen(8888);

// 终端打印如下信息
console.log('成功');