var username = "TestUsername"; 
var password = ""; 
var email = ""; 
var loginUsername = "";
var loginPassword = "";
var loginEmail = "";
var likes = 0;
var comments = 0;
var profilePic = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";
var date = new Date();
var registered = false;
mainUserBio = "";



function register()
{
    $("#register").css("visibility", "hidden");
    $("#login").css("visibility", "visible")
    username = document.getElementById("username").value; //need to update each instance login is brought up, for sidebar and profile page
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    registered = true;

}
function login(){
    loginUsername = document.getElementById("username").value;
    loginPassword = document.getElementById("password").value;
    loginEmail = document.getElementById("email").value;
    if (loginEmail == email && loginUsername == username && loginPassword == password ){
    window.open("./homepage.html");
    window.close("./login.html");
    }
    else{
        alert ("Login details are incorrect...");
    }



}
function goHome() {
    window.open("./homepage.html");
    window.close("./homepage.html");
}
function logout()
{
    window.open("./login.html");
    window.close("./homepage.html");
}

function postEvent()
{
    window.open("./uploadpost.html");
    
}

function profilePage()
{
    window.open("./userProfile.html");
}


function updateSideBar(noti){
    mainUserBio = generateBio();
    $("#sidebarUsername").html(username);
    $("#sidebarUsername").css("font-weight", "bold");
    $("#userBio").html(mainUserBio);
    $("#userFollowers").html(generateNumFollowers() + " Followers");
    $("#userFollowing").html(generateNumFollowing() + " Following");
    console.log("update sidebar")
    $("#notifications").css("font-weight", "bold");
    genNotify = (Math.floor(Math.random()*16)) + 3
    for (k = 1; k < genNotify; k++){
        notificationOutput = document.createElement("p");
        
        $(notificationOutput).attr("id", "notificationOutput" + noti )
    
       
        $("#outputNotify").append(notificationOutput);
        $("#notificationOutput" +noti).html(generateUsername() + " " + generateNotifications()); 
        noti++ 
        
    }
    /*console.log(document.getElementById("notificationOutput").value);
    document.getElementById("notificationOutput").style.overflow = "scroll";
    document.getElementById("userFollowers").innerHTMl = generateNumFollowers() + "Followers";
    document.getElementById("userFollowers").style.fontWeight = "bold";
    document.getElementById("userFollowing").innerHTMl = generateNumFollowing() + "Following"
    document.getElementById("userFollowing").style.fontWeight = "bold";*/
}
// JSON literals for random generated content 
//SCROLL ALL THE WAY DOWN FOR THE FUNCTIONS

randomUsername = {
    "0": "Openlive",
    "1": "Actipl",
    "2": "CistLunatic",
    "3": "Flamesec",
    "4": "Kestech",
    "5": "Essenof",
    "6": "Corelive",
    "7": "Avilive",
    "8": "Livesion",
    "9": "Individual Live", 
    "10": "Telside",
    "11": "Overtel", 
    "12": "Telyard",
    "13": "Bluespot",
    "14": "Onblue"

};
JSONname = (randomUsername);

//used https://sassycaptions.com/bio-generator/
randomBio = {
    "0": "Your life does not get better by chance. It gets better by a change.e",
    "1": "Do you ever feel like a plastic bag?",
    "2": "Kind of a good Samaritan, terrible athlete, but extremely blessed in the napping skills department.",
    "3": "Will there be snacks?",
    "4": "Hi, my hobbies include breakfast, lunch and dinner.",
    "5": "Professional napper.",
    "6": "Professional inquiries only.",
    "7": "A caffeine-dependent life form.",
    "8": "Born to express, not impress.",
    "9": "Stay weird.", 
    "10": "I write bios, not tragedies.",
    "11": "I can’t remember who I stole my bio from or why.", 
    "12": "I'm always on the go and love to explore new places! I love to document my travels and share my experiences with others.",
    "13": "I love to travel and explore new cultures. I'm a huge foodie, and I love to try new things. I'm also a big fan of exploring new places by foot.",
    "14": "I'm a traveler and explorer at heart. I love to see new places and experience different cultures. I believe that travel can be a transformative experience and that it is one of the best ways to learn about the world and about yourself.",
    "15": "Hello, world! I'm a traveler and explorer at heart. I love nothing more than heading out into the world to see new sights and experience new cultures. I'm always looking for new adventures, and I hope my travels will inspire others to explore our beautiful planet.",
    "16": "I'm a travel junkie who loves nothing more than exploring new places and cultures. I'm always looking for new adventures, and I love sharing my experiences with others.",
    "17": "I'm a traveler and lover of all things adventure. I'm always looking for new places to explore and new people to meet. I believe that life is about learning and growing, and that there's no better way to do that than by getting out there and seeing the world. Come join me on my journey!"
};
var JSONBio = randomBio;

// used https://www.dashword.com/meta-description-generator?result=ygJEEbEwJk for descriptions 
randomDescription = {
    "0": "Photography is wonderful way to express yourself. Learn how to take better pictures.",
    "1": "Cool Photos of Australia. See what we've found and add your own.",
    "2": "Cool is a photography blog, featuring the latest and greatest images from around the world, as well as my own photography, writing, and other artistic endeavors.",
    "3": "Cool is a photography blog, featuring the latest and greatest images from around the world, as well as my own photography, writing, and other artistic endeavors.", 
    "4": "We've collected the best travel websites and resources from the web. Everything from hotel booking to currency conversion and best travel deals, we've got it all.",
    "5": "A travel guide to get you to the best places in the world .",
    "6": "Traveling is one of those hobbies or pastimes that seems to draw people of all ages and backgrounds. From the travel blogger to the serious traveler, there is a community of people who appreciate our wanderlust.",
    "7": "How to travel the world. Learn how to get away from it all and plan a trip of a lifetime.",
    "8": "Discover the best ways to travel and see the world.",
    "9": "Individual Live", 
    "10": "Carpooling is an innovative and creative way to share your moments with nature. It's social, it's easy to use, and it's just fun.",
    "11": "A collection of topographic maps and images of the most beautiful places in Canada.", 
    "12": "Canada has a lot of amazing sights to see."
};
JSONDescr = (randomDescription);

randomComment = {
    "0": "This is what I wanna do when I grow up. I don't want to sit on a computer screen and do work. I want to have a real adventure and explore the world. I want to Live!",
    "1": " 👏👏👏Great photo 💐👍 You are a good photographer.",
    "2": "Cool shot!🔥🔥",
    "3": "Haha, I remember you guys! I was in the park at the same time as you",
    "4": "What’s the flowers name?",
    "5": "Hello! I really like the photos you have arranged. Can you borrow me as a reference for painting creation?",
    "6": "Traveling is one of those hobbies or pastimes that seems to draw people of all ages and backgrounds. From the travel blogger to the serious traveler, there is a community of people who appreciate our wanderlust.",
    "7": "Lovely",
    "8": "❤️",
    "9": "what a breathtaking view 😍", 
    "10": "Good stuff here let’s go",
    "11": "That looks like an amazing view!",
    "12": "Canada has a lot of amazing sights to see.",
    "13": "Beautiful shots",
    "14": "Oh I miss this beautiful country so much",
    "15": "I wish I had visited these places", 
    "16": "Very beautiful thankyou",
    "17": "you are super my friend you are a good photographer",
    "18": "Stunning!"
};
JSONComment = (randomComment);

randomNotifications = {
    "0": " started following your A-Team account.",
    "1": " liked your A-Team post.", 
    "2": "commented on your post: ",
    "3": " viewed your profile."
}   
JSONNoti = randomNotifications

// used http://best-hashtags.com
randomHashtag = {
    "0": "#socialmedia #marketing #socialmediamarketing #digitalmarketing",
    "1": "#travel #nature #travelphotography",
    "2": "#life #lifestyle",
    "3": "#naturelovers #a #landscapephotography",
    "4": "#picoftheday #explore #like",
    "5": "#travelgram #hiking #adventure",
    "6": "##summer #music #pretty",
} 
JSONHashtag = (randomHashtag);

randomURLProfilePicture = { 
    "0": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "1": "https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY=",
    "2": "https://images.pexels.com/photos/164196/pexels-photo-164196.jpeg",
    "3": "https://thumbs.dreamstime.com/b/profile-8004175.jpg.", 
    "4": "https://p1.pxfuel.com/preview/571/691/611/profile-picture-image-suit-royalty-free-thumbnail.jpg",
    "5": "https://wallpaperaccess.com/full/2900889.jpg",
    "6": "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=",
    "7": "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=612x612&w=0&k=20&c=zzAlaDFbbaVuRG3he04Jk7ul7uRcgZMWU65yRfImA94=",
    "8": "https://media.gettyimages.com/id/486293671/photo/haneda-airport.jpg?s=612x612&w=gi&k=20&c=ml36Z_0JaA1oW38DG-bZtuPKIKGIdrpPIaUursx5wbg=",
    "9": "https://static.wikia.nocookie.net/k-hip-hop/images/1/19/Sik-k_1.png/revision/latest?cb=20200618183901e", 
    "10": "https://thumbs.dreamstime.com/z/head-shoulder-front-portrait-young-man-suit-blue-shirt-looking-camera-over-gray-studio-background-65164267.jpg"
}
JSONProfilePic = randomURLProfilePicture;

//random picture posts 
randomURLPostPicture = {
    "0": "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__480.jpg",
    "1": "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg",
    "2": "https://images.pexels.com/photos/164196/pexels-photo-164196.jpeg",
    "3": "https://thumbs.dreamstime.com/b/profile-8004175.jpg.", 
    "4": "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?cs=srgb&dl=pexels-ezra-comeau-2387418.jpg&fm=jpg",
    "5": "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "6": "https://travelislife.org/wp-content/uploads/Pexels.jpg",
    "7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIq_VwLZN2yQoA0phH6loibBuZGpUypBgRw&usqp=CAU",
    "8": "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "9": "https://static-cse.canva.com/blob/666309/bestfreestockphotos.24b4e3f6.jpg", 
    "10": "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/assets/6075182686d092000b192cf1/best-free-travel-images-image-3.jpg"
}
JSONPostPic = (randomURLPostPicture);


window.onload = function(){ 
    console.log("working")
    postnum = 1

    if (document.title = "Homepage"){
        generateOtherUserPost(); //always at least two posts
        gen = (Math.floor(Math.random() * 5)) + 2
        for (i=0; i < gen; i++){
            postnum++
            console.log(postnum)
            generateOtherUserPost();}
        updateSideBar(0);
    }
   
    /*if (document.title == "Homepage"){
        randomGen = Math.floor(Math.random() * 12)
        for (i=0; i<= randomGen; i++){
            generateOtherUserPost();
    }}*/
}

function generateOtherUserPost() { 
    allHomePosts = document.createElement("div");
    $(allHomePosts).attr("id", "allHomePosts");

    newPostDiv = document.createElement("div");
        $(newPostDiv).attr("id", "posts");
        span1 = document.createElement("span");
        $(span1).html("Date Posted: " + generateDate());
        $(span1).attr("id", "datePlaceholder");
        span2 = document.createElement("span");
        $(span2).html(generateHashtag());
        $(span2).attr("id", "hashtagPlaceholder");
        $(newPostDiv).append(span1);
        $(newPostDiv).append(span2);

        break1 = document.createElement("br");
        $(newPostDiv).append(break1);

        homeProfilePic = document.createElement("img"); //profile picture as followed in homepage.html
        postimageURL = generatePostPicture();
        console.log(postimageURL);
        $(homeProfilePic).attr("src", postimageURL);
        $(homeProfilePic).attr("alt", "error");
        $(homeProfilePic).attr("id", "mainPost");
        $(newPostDiv).append(homeProfilePic);

        break2 = document.createElement("br");
        $(newPostDiv).append(break2);

        poster = document.createElement("div");
        $(poster).attr("id", "poster");

            posterImage = document.createElement("img");
            $(posterImage).attr("src", generateProfilePicture());
            $(posterImage).attr("id", "profilePicture");
            $(posterImage).attr("alt", "cannot load post picture");

            $(poster).append(posterImage);

            posterInfo = document.createElement("div");
            $(posterInfo).attr("id", "posterInfo");
                span3 = document.createElement("span"); //username
                $(span3).attr("id", "username");
                $(span3).html(generateUsername());
                $(posterInfo).append(span3);
                

                span4 = document.createElement("span"); //likes num
                $(span4).attr("id", "likes");
                $(span4).html(generateNumLikes() + " likes");
                $(posterInfo).append(span4);

                span5 = document.createElement("span"); //comments num
                $(span5).attr("id", "comments");
                t = generateNumComment()
                $(span5).html( t + " comments");
                $(posterInfo).append(span5);
                console.log("works posterinfo")
            $(poster).append(posterInfo);  
            
            underBox = document.createElement("div"); // underBox underneath posterinfo -contains description and comments
            $(underBox).attr("id", "underBox");
                postDescription = document.createElement("div");
                $(postDescription).attr("id", "postDescription");
                    descriptionBox = document.createElement("p");
                    $(descriptionBox).attr("id", "descriptionBox");
                    $(descriptionBox).html("Description: " + generateDescription())
                    $(postDescription).append(descriptionBox);
                $(underBox).append(postDescription);
                
                commentOutline = document.createElement("div");
                $(commentOutline).attr("id", "commentOutline");

                if (t>0){
                    for(i = 1; i <= t; i++){
                        commentBox = document.createElement("p");
                        $(commentBox).attr("id", "commentBox");
                        $(commentBox).html(generateUsername() + ": " + generateComment());
                        $(commentOutline).append(commentBox);
                    }
                }else {

                    commentBox = document.createElement("p");
                    $(commentBox).attr("id", "commentBox");
                    $(commentBox).html("(No comments on post)");
                    $(commentOutline).append(commentBox);
                }

                    /*emptySpace = document.createElement("span");
                    $(emptySpace).attr("id", "emptySpace");
                    $(commentOutline).append(emptySpace);*/

                    //For this, i have no idea how to pass a variable into the jquery selector
                    //the problem is each comment element needs to have a unique id. 
                    //as well as setting an onclick attribute for generated button, if possible in jquery, which I have not figured out 
                    //when pressing submit, the function always applies to the last element with hiding the input & submit, 
                    //while also returning value of the unique text box input, which here only defaults to the first 
                    //i'm not able to return the value of 

                    commentInput = document.createElement("input");
                    $(commentInput).attr("id", "commentInput");
                    $(commentInput).attr("type", "text")
                    $(commentOutline).append(commentInput);
                    
                    submitComment = document.createElement("button");
                    $(submitComment).attr("id", "submitComment"); 
                    $(submitComment).click(function(){
                        console.log("buttonWorks");
                        c = $(submitComment).html()
                        alert(c)
                        $(submitComment).css("visibility", "hidden");
                        $(commentInput).css("visibility", "hidden");
                        emptySpace = document.createElement("p");
                        $(emptySpace).attr("id", "emptySpace");
                        $(commentOutline).prepend(emptySpace);
    
                        
                        
                     
                    }) 
                    $(commentOutline).append(submitComment);

                $(underBox).append(commentOutline);


                
            console.log("underBox works");
            $(poster).append(underBox);

        $(newPostDiv).append(poster);

    $(allHomePosts).append(newPostDiv)
    $("#allHomePosts").append(allHomePosts) //cannot link jquery function to id on homepage.html 
}

//always generate on home page


//FUNCTIONS FOR CONTENT 

function generateUsername() {
    ranChoose = (Math.floor(Math.random() * 15));
    choose = ranChoose.toString();
    newName = (JSONname);
    generatedUsername = newName[choose];
    return generatedUsername;
}

function generateDescription() {
    ranChoose = (Math.floor(Math.random() * 13));
    choose = ranChoose.toString();
    newDescription = (JSONDescr);
    generatedDescription = newDescription[choose];
    return generatedDescription; 
}; 

function generateNumLikes() {
    generateLike = Math.floor(Math.random() * 1001)
    return generateLike;
}

function generateNumFollowers() {
    generateFollowers = Math.floor(Math.random()*1001)
    return generateFollowers; 
}

function generateNumFollowing() {
    generateFollowing = Math.floor(Math.random()*1001)
    return generateFollowing; 
}


function generateNumComment() {
    generateLike = Math.floor(Math.random() * 6)
    return generateLike;
}

function generateDate() {
    var d = new Date()
    year = d.getFullYear()
    date = d.getDate()
    month = d.getMonth() + 1; // returns 0-11 so the + 1 makes it accurate
     return (year + "-" + month + "-" + date);
}

function generateNotifications() {
    ranChoose = (Math.floor(Math.random() * 4));
    choose = ranChoose.toString();
    var generatedNotification = JSONNoti[choose];
    return (generatedNotification); //string
}; 

function generateBio(){
    ranChoose = Math.floor(Math.random()*18);
    choose = ranChoose.toString();
    var generatedBio = JSONBio[choose];
    return generatedBio; 
}

function generateHashtag() {
    ranChoose = (Math.floor(Math.random() * 6))+1;
    choose = ranChoose.toString();
    newHashtag = (JSONHashtag);
    generatedHashtag = newHashtag[choose];
    return (generatedHashtag); //string
}; 

function generateProfilePicture() {
    ranChoose = (Math.floor(Math.random() * 10))+1;
    choose = ranChoose.toString();
    newProfilePic = (JSONProfilePic);
    generatedProfilePic= newProfilePic[choose];
    return generatedProfilePic; // as image url for src = ""
}; 
function generatePostPicture() {
    ranChoose = (Math.floor(Math.random() * 11));
    choose = ranChoose.toString();
    newPostPic = (JSONPostPic);
    generatedPostPic= newPostPic[choose];
    return generatedPostPic; // as image url for src = ""
}; 

function generateComment() {
    ranChoose = (Math.floor(Math.random() * 19));
    choose = ranChoose.toString();
    newComment = (JSONComment);
    generatedComment = newComment[choose];
    return generatedComment; 
//
}
