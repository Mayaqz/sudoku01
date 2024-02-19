const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
function jump() {
  dino.classList("jump-animation");
  setTimeout(() => {
    dino.classList.remove("jump-animation");
  }, 250);
}

document.addEventListener("keypress", () => {
  if (!dino.classList.contains("jump-animation")) {
    jump();
  }
});

setInterval(() => {
  //   const dinoTop = parseInt(
  //     window.getComputedStyle(dino).getPropertyValue("top")
  //   );
  //   const rockLeft = parseInt(
  //     window.getComputedStyle(rock).getPropertyValue("left")
  //   );
  //   console.log(dinoTop);
  //   console.log(rockLeft);
}, 50);
