var express = require('express');
var app = express();

var flag;

app.use(express.static('./'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
      var response = {
       value1:req.query.value1
       
   };
   console.log(req.query.value1);
   flag=Number(req.query.value1)+90;
   console.log(flag.toString());
  // Prepare output in JSON format

   console.log(res);
   res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
