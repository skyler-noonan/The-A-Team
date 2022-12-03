/*var profileUsername = "A-Team Username"; 
var serverPassword = ""; 
var serverEmail = ""; 
var loginUsername = "";
var loginPassword = "";
var loginEmail = "";

var profilePic = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";

const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));

var url = "http://localhost:3000/post"
var port = 3000 */



app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    var z = JSON.parse(req.query['data']);



    if (z['action'] == 'upload'){
        //generate a code for this user
        idCounter++;
        var nameID = z['name'] + idCounter;
        generateCode(nameID);
        var jsontext = JSON.stringify({
            'action': 'generateCode',
            'nameID': nameID,
            'msg': 'New code generated!!!'
        });
        console.log(jsontext);
        console.log(codes);
        // send the response while including the JSON text		
        
        res.send(jsontext)
    }}).listen(3000) 