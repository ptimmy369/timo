/* collapsible */
const drumButton = document.getElementById("collapsible") 
document.getElementById("drum-btn").addEventListener("click", function() {
    drumButton.classList.toggle("collapsible--expanded");
})



/* drum */
const drumSelection = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumSelection; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      let eachButton = this.innerHTML;

      makeSound(eachButton);

      buttonAnimation(eachButton)    

    })
}

document.addEventListener("keydown", function(e) {     

    makeSound(e.key);

    buttonAnimation(e.key);    

})

function makeSound(key) {

       switch (key) {
        case "a":
        case "A":   
            var audio = new Audio("sounds/hi-hat.wav");
            audio.play();
            break;

        case "s":
        case "S":   
            var audio = new Audio("sounds/snare.wav");    
            audio.play();
            break;

        case "d":
        case "D":
            var audio = new Audio("sounds/cowbell.wav");    
            audio.play();
            break;

        case "f":
        case "F":
            var audio = new Audio("sounds/bass.wav");    
            audio.play();  
             break;

        case "g":
        case "G" :  
          var audio = new Audio("sounds/clap.wav");    
            audio.play();  
             break;

        default: console.log(eachButton);      
       
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}