const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout(function () {
    target.classList.remove("vibration");
  }, 100);
};

let container = document.querySelector(".container");
// let houseStraw = document.querySelector("right_img");
let audio = new Audio();
audio.src = "./sound/sound2.mp3";
container.appendChild(audio);

// 이미지 클릭 시 애니메이션 실행
document.getElementById("right_img").addEventListener("click", function () {
  console.log("vibration 실행");
  const image = this; // 클릭된 이미지 요소
  vibration(image); // 애니메이션 함수 호출
  audio.play(); // 노크 소리 play
  audio.volume = 0.3; // 볼륨 조절
});
