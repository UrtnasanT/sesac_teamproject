function appendObject(sceneNum) {
  //   console.log('appendObject 실행');
  // 새로운 이미지 태그 생성
  let newImg = document.createElement('img');
  // 새로운 창 생성
  let newText = document.createElement('span');

  switch (sceneNum) {
    case 1:
      break;
    case 2:
      newImg.src = './img/straw.png';
      newImg.id = 'object';
      newText.id = 'instruction';

      break;
    case 3:
      break;
    case 4:
      // 이미지 변경 로직 추가
      break;
    case 5:
      // 이미지 변경 로직 추가
      break;

    default:
      break;
  }

  // 원하는 위치에 새로운 이미지 삽입
  let leftDiv = document.querySelector('.left'); // 이미지를 추가할 위치
  leftDiv.appendChild(newImg); // 이미지 삽입
  //   leftDiv.appendChild(newText); // 이미지 삽입
  dragAndDrop(); // event 매개변수 제거
}

// drag and drop event
// 드래그 시작시 실행되는 함수
function dragStart(event) {
  // 드래그 대상 요소를 dataTransfer에 추가
  event.dataTransfer.setData('text/plain', event.target.id);
}

// 드래그된 요소가 드롭 대상 위로 올라갈 때 실행되는 함수
function dragOver(event) {
  event.preventDefault(); // 기본 동작 막기
}

// 드래그된 요소가 드롭 대상 위에서 놓여질 때 실행되는 함수
function drop(event) {
  event.preventDefault(); // 기본 동작 막기
  // 드래그된 요소의 id를 가져옴
  const draggedId = event.dataTransfer.getData('text/plain');
  // 해당 id를 가진 요소를 찾아서 가져옴
  const draggedElement = document.getElementById(draggedId);

  // 드롭 대상인 .right 영역에 드래그된 요소를 추가
  const rightArea = document.querySelector('.right');
  rightArea.appendChild(draggedElement);
}

function dragAndDrop() {
  console.log('dragAndDrop 함수 실행');
  // left_img와 right_img에 드래그 앤 드롭 이벤트 추가
  const leftImg = document.getElementById('left_img');
  const rightImg = document.getElementById('right_img');

  leftImg.setAttribute('draggable', true);
  rightImg.setAttribute('draggable', true);

  leftImg.addEventListener('dragstart', dragStart);
  rightImg.addEventListener('dragstart', dragStart);

  // right 영역에 드롭 이벤트 추가
  const rightArea = document.querySelector('.right');
  rightArea.addEventListener('dragover', dragOver);
  rightArea.addEventListener('drop', drop);
}

export { appendObject };
