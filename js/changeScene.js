import { fetchJsonAndDisplayData } from './fetch.js';

function changeScene() {
  const sceneNum = 3; // 원하는 scene 숫자를 여기에 설정
  fetchJsonAndDisplayData(sceneNum);
  changeImg(sceneNum);
}

// 이미지 바꾸는 함수
function changeImg(sceneNum) {
  const imgSrcLeft = document.getElementById('left').src;
  const imgSrcRight = document.getElementById('right').src;

  imgSrcLeft = '';
  imgSrcRight = '';

  switch (sceneNum) {
    case 1:
      imgSrcLeft = './img/pig1_straw.png';
      imgSrcRight = '';
      break;
    case 2:
      break;
    case 3:
      imgSrcLeft = './img/pig1_straw.png';
      imgSrcRight = './img/house_straw';
      break;
    case 4:
      break;
    case 5:
      break;

    default:
      break;
  }
}

changeScene();
