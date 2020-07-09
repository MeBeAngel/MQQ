
"use strict";




function handleKnockInputs () {

    const knockKnockInput = document.getElementById("Knock-Knock-Input");

    const knockKnock = "knock knock";

    if (knockKnockInput.value.toUpperCase() === knockKnock.toUpperCase()) {
      document.getElementById("MQQ-Knock-Knock-Form").style.display = "none";
      document.getElementById("MQQ-Img").src = "./Images/think.PNG";
      document.getElementById("MQQ-Whos-There-Form").style.display = "flex";
  }
    else {
      alert("Thats not a knock knock joke!");
    }


};




function handleWhosThereInputs () {

  const whosThereInput = document.getElementById('Whos-There-Input');

  const letters = /^[A-Za-z" "?!]+$/;

  const who = " who?";


  if (whosThereInput.value.match(letters)) {
    document.getElementById("MQQ-Whos-There-Form").style.display = "none";
    document.getElementById('Who-Para').innerHTML = whosThereInput.value + who;
    document.getElementById("MQQ-Who-Form").style.display = "flex";
  } else {
      alert("Thats not a knock knock joke!");
  };



};







function randomResult () {
    const ranNum = Math.floor(Math.random() * 2);

    let removeWhoDiv = null;

    let updateImg = null;

    let updateEndResultH1 = null;

    let updateEndResultDiv = null;

    let updateButton = null;

    if (ranNum == 0) {
      removeWhoDiv = document.getElementById("MQQ-Who-Form").style.display = "none";
      updateImg = document.getElementById("MQQ-Img").src = "./Images/laugh.svg";
      updateEndResultH1 = document.getElementById('End-Result-h1').innerHTML = "Your made Quackers Quack!";
      updateEndResultDiv = document.getElementById("End-Result").style.display = "flex";
      updateButton = document.getElementById('Result-Button').innerHTML = "Play Again"
    }

    else {
      removeWhoDiv = document.getElementById("MQQ-Who-Form").style.display = "none";
      updateImg = document.getElementById("MQQ-Img").src = "./Images/yawn.PNG";
      updateEndResultH1 = document.getElementById('End-Result-h1').innerHTML = "You made Quackers Yawn";
      updateEndResultDiv = document.getElementById("End-Result").style.display = "flex";
      updateButton = document.getElementById('Result-Button').innerHTML = "Try Again?"
    }


};








function handleEndResult () {

  const whoInput = document.getElementById('Who-Input');

  const letters = /^[A-Za-z" "?!]+$/;

  if (whoInput.value.match(letters)) {
    randomResult();
  }
  else {

  }
}
