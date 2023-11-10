

function makeBubble(){
    var clutter = "";


for(var i =1; i<=80 ; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += ` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
var score = 0;
var hitrn =0;


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent= hitrn;
}
function runTimer(){
   var timerint =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{

               clearInterval(timerint);
               document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;

                 document.querySelector("#pbtm").innerHTML = `
                 <img src ="https://media.tenor.com/cZ2urETMSpsAAAAM/coffindance-coffin.gif" height="200px">
                 <img src ="https://media.tenor.com/XRaqIsw6SgcAAAAM/rahul-gandhi-khatam.gif" height="200px">`;
        }

        
       
    },1000)
}

document.querySelector("#pbtm")
.addEventListener("click" , function(dets){
 var clickedNumber = (Number(dets.target.textContent));
 if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
 }
})
runTimer();
makeBubble();
getNewHit();


// function makeBubble() {
//     var clutter = "";
//     for (var i = 1; i <= 80; i++) {
//         var rn = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
//     document.querySelector("#pbtm").innerHTML = clutter;
// }

// var timer = 60;
// var score = 0;
// var hitrn = 0;

// function increaseScore() {
//     score += 10;
//     document.querySelector("#scoreval").textContent = score;
// }

// function getNewHit() {
//     hitrn = Math.floor(Math.random() * 10);
//     document.querySelector("#hitval").textContent = hitrn;
// }

// function runTimer() {
//     var timerint = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             document.querySelector("#timerval").textContent = timer;
//         } else {
//             clearInterval(timerint);
//             endGame();
//         }
//     }, 1000);
// }

// function endGame() {
//     document.querySelector("#pbtm").innerHTML = `
//         <h1>Game Over</h1>
//         <div id="image-container">
//             <img src="https://media.tenor.com/cZ2urETMSpsAAAAM/coffindance-coffin.gif" height="200px">
//             <img src="https://media.tenor.com/XRaqIsw6SgcAAAAM/rahul-gandhi-khatam.gif" height="200px">
//         </div>`;
//     playGameOverSound();
// }

// document.querySelector("#pbtm").addEventListener("click", function (dets) {
//     var clickedNumber = Number(dets.target.textContent);
//     if (clickedNumber === hitrn) {
//         increaseScore();
//         makeBubble();
//         getNewHit();
//     }
// });

// // Add a button to start the game and audio playback
// document.querySelector("#startButton").addEventListener("click", function () {
//     runTimer();
//     makeBubble();
//     getNewHit();

//     // Start audio playback for 60 seconds after a user action (button click)
//     var gameAudio = new Audio('iH0EnORUtgUs.128.mp3');
//     gameAudio.loop = false;
//     gameAudio.play();
//     setTimeout(function () {
//         gameAudio.pause();
//     }, 60000);
// });

// function playGameOverSound() {
//     // Play the game over sound immediately
//     var gameOverAudio = new Audio();
//     gameOverAudio.play();
// }


// // Create an Audio object with the URL of your background music
// var backgroundMusic = new Audio('C:\Users\acer\Desktop\New Bubble Game\iH0EnORUtgUs.128.mp3');

// // Set the loop property to true if you want the music to repeat
// backgroundMusic.loop = true;

// // Function to start playing the background music
// function playBackgroundMusic() {
//     backgroundMusic.play();
// }

// // Function to stop playing the background music
// function stopBackgroundMusic() {
//     backgroundMusic.pause();
//     backgroundMusic.currentTime = 0;
// }

// // Play the background music for 60 seconds
// playBackgroundMusic();
// setTimeout(stopBackgroundMusic, 60000);
