
// Adding the event listener for a single button using named function 

// document.querySelectorAll("button")[0].addEventListener("click", handleClick)

// function handleClick() {
//     alert("I got clicked!");
// }

// Other way to specify what to do when the eventListener is heard is to use anonymous function 

// document.querySelector("button").addEventListener("click", function() {
//     // what to do when click detected.
//     alert("I got clicked!");
// });

// Accessing all the buttons : 

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}
// to get the identity of the element that triggered the eventListener , we use this keyword


// You can also use forEach to apply something to each element of array without using for statement
// document.querySelectorAll(".drum").forEach(item => {
//     item.addEventListener("click", function () { 
//         alert("I got clicked");
//     });
// });


// To trigger sounds using keyboard presses ....
document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key.toLowerCase());
});

// playing the relevant sound
function makeSound(key) {
    
    switch (key.toLowerCase()) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log();
            break;
    }
}

// Animation 
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); // pressed class is defined in css styles 

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}