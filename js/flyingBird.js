const container = document.querySelector(".content");
const bird = document.createElement("div");
const birdImg = document.createElement("img");

bird.classList.add("bird");
container.appendChild(bird);
bird.appendChild(birdImg);
birdImg.src = "./img/bird.gif";

