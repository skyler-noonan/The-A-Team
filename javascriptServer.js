var express=require('express');
var app=express();
var port = 3500
app.listen(3500, () => console.log('listening at 3000'));

app.post('/post',function(req,res)
{  
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    res.send('Hello World!');
    var z = JSON.parse(req.query['data']);
    console.log(JSON.parse(req.query['data']));
    console.log(z.uploadDescription)

    if (z['action'] == 'storeUpload'){
        console.log(z.uploadDescription)

        var jsontext = JSON.stringify({
            'action': 'generateCode',
            'nameID': nameID,
            'msg': 'New code generated!!!'
        });
        console.log(jsontext);
        console.log(codes);
        // send the response while including the JSON text		
        /*TODO 2 ... send the response including the JSON text*/
        res.send(jsontext);}
    

});
var server=app.listen(port,function() {});
