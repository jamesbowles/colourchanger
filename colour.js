const colours = ['red', 'yellow', 'green', 'blue', 'purple', 'orange']

function getNextColour(colour) {
  const currentColour = document.body.style.backgroundColor;
  const nextColours = colours.filter(colour => colour !== currentColour)
  return nextColours[Math.floor(Math.random() * nextColours.length)];
}

function setColour() {
  const nextColour = getNextColour();
  document.body.style.backgroundColor = nextColour;
  sayColour(nextColour);
}

function sayColour(colour) {
  let utterance = new SpeechSynthesisUtterance(colour);
  speechSynthesis.speak(utterance);
}

function nextSpeed(speed) {
  const speedUp = document.getElementById("speed-up").checked;
  if (speedUp) {
    return speed - (speed/400);
  } else {
    return speed; 
  }
}

window.onload = function(){
  const slider = document.getElementById("range-slider");
  const output = document.getElementById("range");

  let speed = parseInt(slider.value);
  output.innerHTML = speed;

  slider.oninput = function() {
    speed = parseInt(this.value)
    output.innerHTML = speed;
  }

  setTimeout(function timer() {
    setColour()
    speed = nextSpeed(speed)
    output.innerHTML = speed;
    setTimeout(timer, speed)
  }, 1);
}
