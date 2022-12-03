var express=require('express');
var app=express();
app.listen(3000, () => console.log('listening at 3000'));
app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(3000,function() {});