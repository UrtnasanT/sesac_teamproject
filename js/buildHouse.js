function appendObject(sceneNum) {
  //   console.log('appendObject 실행');
  // 새로운 이미지 태그 생성
  let newImg = document.createElement('img');
  let newImg2 = document.createElement('img');
  // 새로운 창 생성
  let newText = document.createElement('span');

  // 이미지 추가할 위치
  let leftDiv = document.querySelector('.left');
  let rightDiv = document.querySelector('.right');

  // 삽입한 이미지 초기화
  let existingImagesLeft = leftDiv.querySelectorAll('#object');
  let existingImagesRight = rightDiv.querySelectorAll('#object');
  let existingImagesRight2 = rightDiv.querySelectorAll('#object-wolf');
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
      dragEvent();
      newImg.src = './img/straw.png';
      newImg.id = 'object';
      newText.id = 'instruction';
      break;
    case 3:
      dragEvent();
      newImg.src = './img/straw.png';
      newImg.id = 'object';
      break;
    case 4:
      dragEvent();
      newImg.src = './img/tree.png';
      newImg.id = 'object';
      break;
    case 5:
      dragEvent();
      newImg.src = './img/brick.png';
      newImg.id = 'object';
      break;

    default:
      break;
  }

  // 원하는 위치에 새로운 이미지 삽입
  leftDiv.appendChild(newImg); // 이미지 삽입
  rightDiv.appendChild(newImg2);
}

function dragEvent() {
  document.addEventListener('DOMContentLoaded', function () {
    var objectImg = document.getElementById('object');
    var rightImg = document.getElementById('right_img');

    objectImg.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData('text', event.target.id);
    });

    rightImg.addEventListener('dragover', function (event) {
      event.preventDefault();
    });

    rightImg.addEventListener('drop', function (event) {
      event.preventDefault();
      var data = event.dataTransfer.getData('text');
      var draggedElement = document.getElementById(data);

      // If the dragged element is the object image
      if (draggedElement && draggedElement.id === 'object') {
        // Show the right image by setting display to 'inline'
        rightImg.style.opacity = 1;
        // Change the src attribute of the right image to the object image's src
      }
    });
  });
}

export { appendObject };
