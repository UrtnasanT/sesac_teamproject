function appendObject(sceneNum) {
  //   console.log('appendObject 실행');
  // 새로운 이미지 태그 생성
  let newImg = document.createElement("img");
  let newImg2 = document.createElement("img");
  // 새로운 창 생성
  let newText = document.createElement("span");

  let leftDiv = document.querySelector(".left"); // 이미지를 추가할 위치
  let rightDiv = document.querySelector(".right");

  // 삽입한 이미지 초기화
  let existingImagesLeft = leftDiv.querySelectorAll("#object");
  let existingImagesRight = rightDiv.querySelectorAll("#object");
  let existingImagesRight2 = rightDiv.querySelectorAll("#object-wolf");
  existingImagesLeft.forEach((image) => {
    leftDiv.removeChild(image);
  });
  existingImagesRight.forEach((image) => {
    rightDiv.removeChild(image);
  });
  existingImagesRight2.forEach((image) => {
    rightDiv.removeChild(image);
  });

  switch (sceneNum) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      newImg.src = "./img/straw.png";
      newImg.id = "object";
      leftDiv.appendChild(newImg); // 이미지 삽입
      dragEvent(newImg, document.getElementById("right_img"));
      document.getElementById("right_img").style.opacity = "0.6";
      break;
    case 4:
      newImg.src = "./img/tree.png";
      newImg.id = "object";
      leftDiv.appendChild(newImg); // 이미지 삽입
      dragEvent(newImg, document.getElementById("right_img"));
      document.getElementById("right_img").style.opacity = "0.6";

      break;
    case 6:
      newImg.src = "./img/brick.png";
      newImg.id = "object";
      leftDiv.appendChild(newImg); // 이미지 삽입
      dragEvent(newImg, document.getElementById("right_img"));
      document.getElementById("right_img").style.opacity = "0.6";
      break;
    case 16:
      newImg.src = "./img/fire.png";
      newImg.id = "object";
      newImg.draggable = true;
      leftDiv.appendChild(newImg); // 이미지 삽입
      dragEvent(newImg, document.getElementById("right_img"));

      newImg2.src = "./img/wolf_burn.png";
      newImg2.id = "object_wolf";
      rightDiv.appendChild(newImg2);
      break;

    default:
      break;
  }

  // 원하는 위치에 새로운 이미지 삽입

  // leftDiv.appendChild(newImg); // 이미지 삽입
  // rightDiv.appendChild(newImg2);
  //   leftDiv.appendChild(newText); // 텍스트 삽입
}

function dragEvent(objectImg, rightImg) {
  console.log("dragEvent 함수가 호출되었습니다.");
  objectImg.addEventListener("dragstart", function (event) {
    console.log("dragstart 이벤트가 발생하였습니다.");
    event.dataTransfer.setData("text", event.target.id);
  });

  rightImg.addEventListener("dragover", function (event) {
    console.log("dragover 이벤트가 발생하였습니다.");
    event.preventDefault();
  });

  rightImg.addEventListener("drop", function (event) {
    console.log("drop 이벤트가 발생하였습니다.");
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    if (draggedElement && draggedElement.id === "object") {
      console.log(
        "드래그된 요소가 object이므로 right_img의 opacity를 변경합니다."
      );
      rightImg.style.opacity = 1;
    }
  });
}

export { appendObject };
