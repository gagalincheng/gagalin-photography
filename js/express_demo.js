var express = require('express');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
	host : '127.0.0.1',
	database: 'gagalin',
	port : '3306',
	user : 'root',
	password : '123456',
});

app.get('/listThemes',function(req,res){
	/**设置响应头允许ajax跨域访问**/
	res.setHeader("Access-Control-Allow-Origin","*");
	/*星号表示所有的异域请求都可以接受，*/
 	res.setHeader("Access-Control-Allow-Methods","GET,POST");

	var themeGetSql = 'SELECT * FROM ga_theme where state=1 order by date desc';
	connection.query(themeGetSql,function (err, result) {
       res.send("cb("+JSON.stringify(result)+")");  
	});	
});

app.get('/listImgs',function(req,res){
	/**设置响应头允许ajax跨域访问**/
	res.setHeader("Access-Control-Allow-Origin","*");
	/*星号表示所有的异域请求都可以接受，*/
 	res.setHeader("Access-Control-Allow-Methods","GET,POST");

	var imgGetSql = 'SELECT * FROM ga_img where state=1 order by id asc';
	connection.query(imgGetSql,function (err, result) {
       res.send("cb("+JSON.stringify(result)+")");  
	});
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('可访问http://%s:%s',host,port);
});

