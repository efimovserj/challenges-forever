function keyPress({ keyCode }) {
  playSound(keyCode);
  jogglingStyles(keyCode);
}

function playSound(code) {
  const audioElement = document.querySelector(`audio[data-key="${code}"]`);

  if (!audioElement) return undefined;

  const audioSrc = audioElement.getAttribute("src");
  const audio = new Audio(audioSrc);

  audio.play();
}

function jogglingStyles(code) {
  const keyElement = document.querySelector(`.key[data-key="${code}"]`);

  if (!keyElement) return undefined;

  keyElement.classList.add("playing");

  setTimeout(() => {
    keyElement.classList.remove("playing");
  }, 100);
}

/** Not good implementation if key was Sleeping
 function removeTransition(e) {
  if (e.propertyName !== "transform") return undefined;

  this.classList.remove("playing");
}

const keyElementList = document.querySelectorAll(".key");

keyElementList.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
 */

window.addEventListener("keydown", keyPress);
