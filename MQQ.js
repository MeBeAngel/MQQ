

function handleKnockInputs () {

    const knockKnockInput = document.getElementById("Knock-Knock-Input").value;

    const knockKnock = "knock knock";

    const updateWhosThereDiv = document.getElementById("MQQ-Whos-There-Form").style.display = "flex";

    const updateImage = document.getElementById("MQQ-Img").src = "./Images/think.PNG";

    const removeKnockKnockDiv = document.getElementById("MQQ-Knock-Knock-Form").style.display = "none";


    if (knockKnockInput.toUpperCase() === knockKnock.toUpperCase()) {
      removeKnockKnockDiv;
      updateWhosThereDiv;
      updateImage;

  }
    else {
           alert('Thats not a knock knock joke!');
         }
};












function handleWhosThereInputs () {

  const whosThereInput = document.getElementById('Whos-There-Input').value;

  const letters = /^[A-Za-z" "?!]+$/;

  const who = " who?";

  const removeWhosThereDiv = document.getElementById("MQQ-Whos-There-Form").style.display = "none";

  const updatePara = document.getElementById('Who-Para').innerHTML = whosThereInput + who;

  const updateWhoDiv = document.getElementById("MQQ-Who-Form").style.display = "flex";


  if (whosThereInput.match(letters)) {
    removeWhosThereDiv;
    updatePara;
    updateWhoDiv;
  } else {
    alert('Thats not a knock knock joke!')
  }



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

  const whoInput = document.getElementById('Who-Input').value;

  const letters = /^[A-Za-z" "?!]+$/;

  if (whoInput.match(letters)) {
    randomResult();
  }
  else {
    alert('Thats not a knock knock joke!')
  }
}
