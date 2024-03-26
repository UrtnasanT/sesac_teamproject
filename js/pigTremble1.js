function appendObject(sceneNum) {
  //   console.log('appendObject 실행');
  // 새로운 이미지 태그 생성

  let newImg1 = document.createElement('img');
  let newImg2 = document.createElement('img');
  let newBtn = document.createElement('div');
  newImg1.src = './img/pig_tremble.png';
  newImg2.src = './img/pig_tremble.png';
  newImg1.id = 'pig_right1';
  newImg2.id = 'pig_right2';
  newBtn.className = 'button';
  // 원하는 위치에 새로운 이미지 삽입
  // 이미지를 추가할 위치

  // 원하는 위치에 새로운 이미지 삽입
  // 이미지를 추가할 위치
  let rightDiv = document.querySelector('.right');

  let existingImages1 = rightDiv.querySelectorAll('#pig_right1');
  let existingImages2 = rightDiv.querySelectorAll('#pig_right2');

  existingImages1.forEach((image) => {
    rightDiv.removeChild(image);
  });
  existingImages2.forEach((image) => {
    rightDiv.removeChild(image);
  });

  rightDiv.appendChild(newImg1);
  rightDiv.appendChild(newBtn);

  let escapeBtn = document.querySelector('.button');
  escapeBtn.innerHTML = `<p class="btnText">도망가기</p>
  <div class="btnTwo">
    <p class="btnText2">GO!</p>
  </div>`;

  tremblePig();
}

// function tremblePig() {
//   // # fadein으로 늑대와 돼지 등장, 3초 후 떠는 돼지

//   // const pigTremble = document.getElementById("right_img");
//   const pigTremble = document.querySelector('#pig_right1');

//   setTimeout(() => pigTremble.classList.add('vibration'), 2000);

//   let escapeBtn = document.querySelector('.button');
// }

function tremblePig() {
  const pigTremble = document.querySelector('#pig_right1');

  // 2초 후에 vibration 클래스 추가
  setTimeout(() => {
    pigTremble.classList.add('vibration');
  }, 2000);

  // 버튼 요소 선택
  const escapeBtn = document.querySelector('.button');

  // escapeBtn 버튼 클릭 시 애니메이션 종료
  escapeBtn.addEventListener('click', () => {
    pigTremble.classList.remove('vibration');
  });
}

appendObject();
