// Design Document 

// Create two random numbers
// Compare the two random numbers
// Change the h1 to who the winner is
// Change the image to the corresponding random numbers


var r1 = Math.floor(Math.random() * 6) + 1;
var r2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", "dice"+r1+".png");

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", "dice"+r2+".png");


var h1 = document.querySelectorAll("h1")[0];
if(r1>r2){
    h1.innerHTML = "Player 1 Wins";
} else if (r1<r2){
    h1.innerHTML = "Player 2 Wins";
} else {
    h1.innerHTML = "Draw";
}


