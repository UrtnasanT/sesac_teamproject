import { fetchJsonAndDisplayData } from './fetch.js';
import { appendObject } from './buildHouse.js';

function changeScene() {
  const sceneNum = 4; // 원하는 scene 숫자를 여기에 설정
  fetchJsonAndDisplayData(sceneNum); // 자막 불러오기
  appendObject(sceneNum); // build-house 씬 오브젝트 추가
  changeImg(sceneNum); // 이미지 변경
}

// 이미지 바꾸는 함수
function changeImg(sceneNum) {
  let imgLeft = document.querySelector('.left img');
  let imgRight = document.querySelector('.right img');

  imgLeft.src = '';

  switch (sceneNum) {
    case 1:
      imgLeft.src = './img/pig1_straw.png';
      break;
    case 2:
      changeStyle('buildHouse');
      imgLeft.src = './img/pig1_straw_no.png';
      imgRight.src = './img/house_straw.png';
      break;
    case 3:
      changeStyle('buildHouse');
      imgLeft.src = './img/pig1_straw_no.png';
      imgRight.src = './img/house_straw.png';
      break;
    case 4:
      changeStyle('buildHouse');
      imgLeft.src = './img/pig2_tree_no.png';
      imgRight.src = './img/house_tree.png';
      break;
    case 5:
      changeStyle('buildHouse');
      imgLeft.src = './img/pig3_birck_no.png';
      imgRight.src = './img/house_bric.png';
      break;

    default:
      break;
  }
}

// css 파일 변경
function changeStyle(css) {
  let css_link = document.getElementById('changeStyle');
  if (css_link) {
    css_link.href = './css/' + css + '.css';
  }
}

changeScene();