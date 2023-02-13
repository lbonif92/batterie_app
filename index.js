// make sound with click

var numberofDrum = document.querySelectorAll(".drum").length;

for ( i = 0; i < numberofDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonClicked = this.innerHTML;

        makeSound(buttonClicked);

    });

}

// make sound with KeyBoard

document.addEventListener("keypress", function(event){
    
    makeSound(event.key.toUpperCase());

});

function makeSound (key){

    switch (key) {

        case "A":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    
        case "Z":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "E":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "R":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "T":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "Y":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "U":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

    default: console.log("buttonClicked")
    }
}



