var express=require('express');
var app=express();
const port = 3000
app.listen(port, () => console.log('listening at 3000'));

app.post('/post',function(req,res)
{   
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    res.send('Hello World!');
    

});
var server=app.listen(port,function() {});
