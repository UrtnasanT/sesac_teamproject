

function addImage() {
  var rightImgElement = document.getElementById("right_img"); // 기존 이미지 요소 가져오기
  var newImgElement = document.createElement("img"); // 새 이미지 요소 생성
  var newImgElement2 = document.createElement("img"); // 새 이미지 요소 생성

  if (rightImgElement && newImgElement && newImgElement2) {
    newImgElement.src = "./img/house_bric.png"; // 새 이미지 경로 설정
    newImgElement2.src = "./img/pigs.png"; // 새 이미지 경로 설정

    // 이미지에 클래스 추가
    newImgElement.classList.add("home2");
    newImgElement2.classList.add("end_pigs"); // pigs 클래스 추가

    // 새 이미지들을 기존 이미지 뒤에 추가
    rightImgElement.parentNode.insertBefore(
      newImgElement,
      rightImgElement.nextSibling
    );
    rightImgElement.parentNode.insertBefore(
      newImgElement2,
      newImgElement.nextSibling
    );
    // 새 이미지를 right 클래스의 첫 번째 자식으로 이동
    var rightElement = document.querySelector(".right"); // right 클래스 요소 가져오기
    if (rightElement) {
      rightElement.insertBefore(newImgElement2, rightElement.firstElementChild);
    }
  }
}

// 함수 호출
addImage();




