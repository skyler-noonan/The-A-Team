var username = "";
var password = "";
var email = "";
var loginUsername = "";
var loginPassword = "";
var loginEmail = "";
var likes = 0;
var comments = 0;
var profilePic = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";
var date = new Date();

function register()
{
    $("#register").css("visibility", "hidden");
    $("#login").css("visibility", "visible");
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";

}
function login(){
    loginUsername = document.getElementById("username").value;
    loginPassword = document.getElementById("password").value;
    loginEmail = document.getElementById("email").value;
    if (loginEmail == email && loginUsername == username && loginPassword == password ){
    window.open("./homepage.html");
    }
    



}
