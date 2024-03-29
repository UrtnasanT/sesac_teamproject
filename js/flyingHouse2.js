document.getElementById("right_img").style.opacity = "1";
document.querySelector("#right_img").classList.add("houseFlying");
document.querySelector("#left_img").classList.add("wolf-wind");


setTimeout(function () {
  // 이미지 요소를 선택합니다.
  var wolfImage = document.querySelector(".wolf-wind");

  // 이미지를 wolf_blow로 변경합니다.
  wolfImage.src = "./img/wolf_blow.png";

  var houseImage = document.querySelector("img");
  // .right 클래스에 overflow: hidden;을 추가합니다.
  document.querySelector(".right").style.overflow = "hidden";

  // 애니메이션을 시작하기 전에 'flying' 클래스를 추가합니다.
  document.querySelector(".houseFlying").classList.add("flying");
}, 1500);

// 새 이미지 요소를 생성합니다.
var newImage = document.createElement("img");
var newImage2 = document.createElement("img");

newImage.src = "./img/pig_tremble.png";
newImage.style.position = "absolute";
newImage.style.bottom = "5vh";
newImage.style.width = "15vw";
newImage.style.right = "16vw";
newImage.classList.add("hidePig");

newImage2.src = "./img/pig_tremble.png";
newImage2.style.position = "absolute";
newImage2.style.bottom = "5vh";
newImage2.style.width = "15vw";
newImage2.style.right = "25vw";
newImage2.classList.add("hidePig");
// 이미지를 추가합니다.
document.querySelector(".right").appendChild(newImage);
document.querySelector(".right").appendChild(newImage2);

document.querySelector("#btn_next").addEventListener("click", function () {
  // hidePig 클래스가 존재하는지 확인합니다.
  var hidePigElement = document.querySelector(".hidePig");

  // hidePig 클래스가 존재한다면 해당 요소를 제거합니다.
  if (hidePigElement !== null) {
    hidePigElement.remove();
  }
});
