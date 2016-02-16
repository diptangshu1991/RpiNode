var express = require('express');
var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var flag;

app.use(express.static('./'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_get', function (req, res) {


      var response =  req.body.value1;
       
  
   console.log(req.query.value1);
   flag=Number(req.query.value1)+90;
   console.log(flag.toString());
  // Prepare output in JSON format

   console.log(res);
   res.end(response);
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
