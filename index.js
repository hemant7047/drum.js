// function BellBoy(age,name,permit,languages){
//     this.age=age;
//     this.name=name;
//     this.permit=permit;
//     this.languages=languages;
// }
// var bellBoy1=new BellBoy(17,"Timmy","yes",["English","Hindi"])
// console.log(bellBoy1);
// ------------METHOD & IT'S OBJECT--------------------
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     alert("clicked");
//   });

// Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
// Detecting key-press
document.addEventListener("keypress",(event)=>{ //funtion() or ()=> is called arrow function
  makeSound(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
          var tom1= new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          var tom2= new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "s":
          var tom3= new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          var tom4= new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          var snare= new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        case "k":
          var crash= new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        case "l":
          var kick= new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
  
        default:
            console.log(buttonInnerHTML);
          break;
      }
}

