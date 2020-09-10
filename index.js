const noOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonText = this.innerHTML;
        playSound(buttonText);
        animateButton(buttonText);
        // this.style.color = #DA0463;
    });
}

document.addEventListener("keypress", function(event) {
    playSound(event.key);
    animateButton(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            {
                var crash = new Audio("sounds/crash.mp3");
                // this.style.color = "white";
                crash.play();
                // break;
            }
        case "a":
            {
                var kick = new Audio("sounds/kick-bass.mp3");
                // this.style.color = "white";
                kick.play();
                // break;
            }
        case "s":
            {
                var tom1 = new Audio("sounds/tom-1.mp3");
                // this.style.color = "white";
                tom1.play();
                // break;
            }
        case "d":
            {
                var tom3 = new Audio("sounds/tom-3.mp3");
                // this.style.color = "white";
                tom3.play();
                // break;
            }
        case "j":
            {
                var tom4 = new Audio("sounds/tom-4.mp3");
                // this.style.color = "white";
                tom4.play();
                // break;
            }
        case "k":
            {
                var tom2 = new Audio("sounds/tom-2.mp3");
                // this.style.color = "white";
                tom2.play();
                // break;
            }
        case "l":
            {
                var snare = new Audio("sounds/snare.mp3");
                // this.style.color = "white";
                snare.play();
                // break;
            }
        default:
            console.log(buttonText);
    }
}

function animateButton(key) {
    var button = document.querySelector("." + key);
    button.classsList.add("pressed");
    alert(button);

    setTimeout(function() {
        button.classsList.remove("pressed");
    }, 1000);
}