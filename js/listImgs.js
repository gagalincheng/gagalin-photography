var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listImgs', function (req, res) {
   fs.readFile( __dirname + "/json/" + "imgs.json", 'utf8', function (err, data) {
       res.end( JSON.stringify(data) );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})