const audio = new Audio("../music/Drum.wav");
const a = document.getElementById("a");
// audio.play();

const remove = () => {
  a.classList.remove("changeColor");
  audio.pause();
};

const changeColor = () => {
  a.classList.add("changeColor");
  audio.play();
  a.addEventListener('click',remove);
};

a.addEventListener("click", changeColor);
