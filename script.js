var personName = "";
function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }

}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

let buttonMood = document.getElementsByTagName("button")[0];
buttonMood.addEventListener("click", goDark);

let userInput = document.querySelector(".textEntry");
userInput.addEventListener("input", typeAndScream);

let buttonDont = document.getElementsByTagName("button")[1];
buttonDont.addEventListener("click", complainMessage);

let buttonStory = document.getElementsByTagName("button")[2];
buttonStory.addEventListener("click", finishTheStory);