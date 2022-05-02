var randomNumber1 = Math.floor((Math.random())*6)+1;

var randomNumber2 = Math.floor((Math.random())*6)+1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc1 = "images/" + randomDiceImage1;

var randomImageSrc2 = "images/" + randomDiceImage2;

// Applying DOM to change the elements
var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSrc1);

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSrc2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins 🚩"
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins 🚩"
}
else
{
    document.querySelector("h1").innerHTML = "Draw!!"
}