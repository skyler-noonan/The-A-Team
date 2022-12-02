var username = "A-Team Test"; //A-Team Test //for TA 
var password = "ateam123"; //ateam123
var email = "ateam@email.com"; //ateam@email.com
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
JSONname = JSON.stringify(randomUsername);
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
JSONDescr = JSON.stringify(randomDescription);


randomNotifications = {
    "0": " started following your A-Team account.",
    "1": " liked your A-Team post.", 
    "2": "commented on your post: ",
    "3": " viewed your profile."
}   
JSONNoti = JSON.stringify(randomNotifications)

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
JSONHashtag = JSON.stringify(randomHashtag);

randomURLProfilePicture = { 
    "0": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "1": "https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY=",
    "2": "https://images.pexels.com/photos/164196/pexels-photo-164196.jpeg",
    "3": "https://thumbs.dreamstime.com/b/profile-8004175.jpg.", 
    "4": "https://p1.pxfuel.com/preview/571/691/611/profile-picture-image-suit-royalty-free-thumbnail.jpg",
    "5": "https://media.gettyimages.com/id/938709362/photo/portrait-of-a-girl.jpg?s=612x612&w=gi&k=20&c=fHnaOTOyL1AkomTgPQLagm304P35njWjjublVPMzheg=.",
    "6": "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=",
    "7": "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=612x612&w=0&k=20&c=zzAlaDFbbaVuRG3he04Jk7ul7uRcgZMWU65yRfImA94=",
    "8": "https://media.gettyimages.com/id/486293671/photo/haneda-airport.jpg?s=612x612&w=gi&k=20&c=ml36Z_0JaA1oW38DG-bZtuPKIKGIdrpPIaUursx5wbg=",
    "9": "https://static.wikia.nocookie.net/k-hip-hop/images/1/19/Sik-k_1.png/revision/latest?cb=20200618183901e", 
    "10": "https://thumbs.dreamstime.com/z/head-shoulder-front-portrait-young-man-suit-blue-shirt-looking-camera-over-gray-studio-background-65164267.jpg"
}
JSONProfilePic = JSON.stringify(randomURLProfilePicture);

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
JSONPostPic = JSON.stringify(randomURLPostPicture);


window.onload = function(){ 
    console.log("working")
    for (i=0; i<= 4; i++){
        generateOtherUserPost();
    }
}

function generateOtherUserPost() { 
    allHomePosts = document.createElement("div");
    $(allHomePosts).attr("id", "allHomePosts");

    newPostDiv = document.createElement("div");
        $(newPostDiv).attr("id", "posts");
        span1 = document.createElement("span");
        $(span1).text("Date Posted: " + generateDate());
        span2 = document.createElement("span");
        $(span2).text(generateHashtag());
        $(newPostDiv).append(span1);
        $(newPostDiv).append(span2);

        break1 = document.createElement("br");
        $(newPostDiv).append(break1);

        homeProfilePic = document.createElement("img"); //profile picture as followed in homepage.html
        $(homeProfilePic).attr("src", generateProfilePicture());
        $(homeProfilePic).attr("alt", "error");
        $(newPostDiv).append(homeProfilePic);

        break2 = document.createElement("br");
        $(newPostDiv).append(break2);

        poster = document.createElement("div");
        $(poster).attr("id", "poster");

            posterImage = document.createElement("img");
            $(posterImage).attr("src", generatePostPicture());
            $(poster).append(posterImage);

            posterInfo = document.createElement("div");
            $(posterInfo).attr("id", "posterInfo");
                span3 = document.createElement("span"); //username
                $(span3).attr("id", "username");
                $(span3).text(generateUsername());
                $(span3).append(posterInfo);

                span4 = document.createElement("span"); //likes num
                $(span4).attr("id", "likes");
                $(span4).text(generateNumLikes());
                $(span4).append(posterInfo);

                span5 = document.createElement("span"); //comments num
                $(span5).attr("id", "comments");
                $(span5).text(generateNumComment());
                $(span5).append(posterInfo);

            $(poster).append(posterInfo);   

        $(newPostDiv).append(poster);

    $(allHomePosts).append(newPostDiv)
    $("#allHomePosts").append(allHomePosts) //cannot link jquery function to id on homepage.html 
}

//always generate on home page


//FUNCTIONS FOR CONTENT 

function generateUsername() {
    ranChoose = (Math.floor(Math.random() * 15));
    choose = ranChoose.toString();
    newName = JSON.parse(JSONname);
    generatedUsername = newName[choose];
    return (toString(generatedUsername));
}

function generateDescription() {
    ranChoose = (Math.floor(Math.random() * 5));
    choose = ranChoose.toString();
    newDescription = JSON.parse(JSONDescr);
    generatedDescription = newDescription[choose];
    return (toString(generatedDescription)); 
}; 

function generateNumLikes() {
    generateLike = Math.floor(Math.random() * 1001)
    return (toString(generateLike));
}

function generateNumComment() {
    generateLike = Math.floor(Math.random() * 6)
    return (toString(generateLike));
}

function generateDate() {
    d = new Date()
    year = d.getFullYear()
    date = d.getDate()
    month = d.getMonth()
    return (toString(year + "-" + month + "-" + date))
}

function generateNotifications() {
    ranChoose = (Math.floor(Math.random() * 4));
    choose = ranChoose.toString();
    newNotification = JSON.parse(JSONNoti);
    generatedNotification = newNotification[choose];
    return (toString(generatedNotification)); //string
}; 

function generateHashtag() {
    ranChoose = (Math.floor(Math.random() * 7));
    choose = ranChoose.toString();
    newHashtag = JSON.parse(JSONHashtag);
    generatedHashtag = newHashtag[choose];
    return (toString(generatedHashtag)); //string
}; 

function generateProfilePicture() {
    ranChoose = (Math.floor(Math.random() * 11));
    choose = ranChoose.toString();
    newProfilePic = JSON.parse(JSONProfilePic);
    generatedProfilePic= newProfilePic[choose];
    return (toString(generatedProfilePic)); // as image url for src = ""
}; 
function generatePostPicture() {
    ranChoose = (Math.floor(Math.random() * 11));
    choose = ranChoose.toString();
    newPostPic = JSON.parse(JSONPostPic);
    generatedPostPic= newPostPic[choose];
    return (toString(generatedPostPic)); // as image url for src = ""
}; 
