// 이미지 변경 함수
function changeImage(newImageUrl) {
  document.getElementById("hoverImage").src = newImageUrl;
}

// 이미지 원래대로 복원 함수
function restoreImage() {
  document.getElementById("hoverImage").src = "기본이미지URL";
}

// 이미지 경로 변경 함수
function changeImage() {
  let image = document.getElementById("hoverImage");
  image.src = "./img/main/logo_lg.gif";
  document.getElementById("hoverImage").style.width = "230px";
}

// 이미지 경로 복원 함수
function restoreImage() {
  let image = document.getElementById("hoverImage");
  image.src = "./img/main/logo.gif";
  document.getElementById("hoverImage").style.width = "43px";
}
