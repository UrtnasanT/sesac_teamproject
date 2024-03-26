function appendObject(sceneNum) {
  //   console.log('appendObject 실행');
  // 새로운 이미지 태그 생성

  let newImg = document.createElement('img');
  let newBtn = document.createElement('div');
  newImg.src = './img/pig_tremble.png';
  newImg.id = 'pig_right2';
  newBtn.className = 'button';
  newBtn.id = 'button_run';

  // 원하는 위치에 새로운 이미지 삽입
  // 이미지를 추가할 위치
  let rightDiv = document.querySelector('.right');

  // 삽입한 이미지 초기화
  let existingImagesRight = rightDiv.querySelectorAll('#pig_right2');
  let existingImagesRight2 = rightDiv.querySelectorAll('#button_run');

  existingImagesRight.forEach((image) => {
    rightDiv.removeChild(image);
  });
  existingImagesRight2.forEach((btn) => {
    rightDiv.removeChild(btn);
  });

  rightDiv.appendChild(newImg);
  rightDiv.appendChild(newBtn);

  let escapeBtn = document.querySelector('.button');
  escapeBtn.innerHTML = `<p class="btnText">도망가기</p>
  <div class="btnTwo">
    <p class="btnText2">GO!</p>
  </div>`;

  tremblePig();
}

function tremblePig() {
  // # fadein으로 늑대와 돼지 등장, 3초 후 떠는 돼지

  // const pigTremble = document.getElementById("right_img");
  const pigTremble = document.querySelector('#right_img');
  const pigTremble2 = document.querySelector('#pig_right2');

  setTimeout(() => pigTremble.classList.add('vibration'), 2000);
  setTimeout(() => pigTremble2.classList.add('vibration'), 2000);
  setTimeout(() => pigTremble2.classList.add('vibration'), 2000);
}

appendObject();
