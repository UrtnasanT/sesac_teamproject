document.querySelector(".house").addEventListener("click", function () {
  // 집 이미지 요소를 선택합니다.
  var houseImage = document.querySelector("img");
  // .right 클래스에 overflow: hidden;을 추가합니다.
  document.querySelector(".right").style.overflow = "hidden";

  // 애니메이션을 시작하기 전에 'flying' 클래스를 추가합니다.
  this.classList.add("flying");
  console.log("houseImage", houseImage);
  // 애니메이션이 완료된 후에 이미지의 src를 변경합니다.
  houseImage.addEventListener("animationend", function onAnimationEnd() {
    // 애니메이션 종료 이벤트 핸들러를 해제합니다.
    houseImage.removeEventListener("animationend", onAnimationEnd);

    // 'flying' 클래스를 제거합니다.
    this.classList.remove("flying");
  });
});
