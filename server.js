var express=require('express');
var app =express();
var bodyParser = require('body-parser');
//引用bodyParser 这个不要忘了写
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
var questions=['hello', 'dell', 'yes'];
//写个接口123
app.get('/json',function(req,res){
    res.status(200);
    res.json(questions);
});
//配置服务端口
var server = app.listen(3001, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});