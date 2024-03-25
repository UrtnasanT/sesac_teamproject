function appendObject(sceneNum) {
  //   console.log('appendObject 실행');
  // 새로운 이미지 태그 생성
  let newImg = document.createElement('img');
  let newImg2 = document.createElement('img');
  // 새로운 창 생성
  let newText = document.createElement('span');

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
    case 16:
      newImg.src = './img/fire.png';
      newImg.id = 'object';
      newImg2.src = './img/wolf_burn.png';
      newImg2.id = 'object_wolf';
      break;

    default:
      break;
  }

  // 원하는 위치에 새로운 이미지 삽입
  let leftDiv = document.querySelector('.left'); // 이미지를 추가할 위치
  let rightDiv = document.querySelector('.right');
  leftDiv.appendChild(newImg); // 이미지 삽입
  rightDiv.appendChild(newImg2);
  //   leftDiv.appendChild(newText); // 텍스트 삽입
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

      if (draggedElement && draggedElement.id === 'object') {
        rightImg.style.opacity = 1;
      }
    });
  });
}

export { appendObject };
