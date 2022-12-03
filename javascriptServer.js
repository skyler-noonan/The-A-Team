var express=require('express');
var app=express();
const port = 80
app.listen(port, () => console.log('listening at 3000'));
app.get('/',function(req,res)
{   
    res.send('Hello World!');

});
var server=app.listen(port,function() {});
