import { fetchJsonAndDisplayData } from './fetch.js';
import { appendObject } from './buildHouse.js';

function backNext() {
  const btn_back = document.getElementById('btn_back');
  const btn_next = document.getElementById('btn_next');

  let sceneNum = 1;

  btn_back.onclick = function changeBackScene() {
    console.log('back_btn');
    sceneNum--;
    changeScene(sceneNum);
  };

  btn_next.onclick = function changeNexkScene() {
    sceneNum++;
    changeScene(sceneNum);
  };
}

function changeScene(sceneNum) {
  sceneNum = 1;
  fetchJsonAndDisplayData(sceneNum); // 자막 불러오기
  appendObject(sceneNum); // build-house 씬 오브젝트 추가
  changeImg(sceneNum); // 이미지 변경
}

// 이미지 바꾸는 함수
function changeImg(sceneNum) {
  let imgLeft = document.querySelector('.left img');
  let imgRight = document.querySelector('.right img');

  imgLeft.src = '';
  console.log('씬넘버', sceneNum);

  switch (sceneNum) {
    case 1:
      changeStyle('firstScene');
      imgLeft.src = './img/pigs_default.png';
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
    case 12:
      changeStyle('buildHouse');
      imgLeft.src = './img/pig3_birck_no.png';
      imgRight.src = './img/house_bric.png';
      break;
    case 15:
      changeStyle('rideSmokeStack');
      imgLeft.src = './img/wolf_default.png';
      imgRight.src = './img/house_bric.png';
      break;
    case 16:
      changeStyle('burntWolf');
      imgLeft.src = './img/pig_back2.png';
      imgRight.src = './img/boil_pot1.png';
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

// js 파일 변경
function changeJs(js) {
  let js_link = document.getElementById('changeJS');
  if (js_link) {
    js_link.href = './js/' + css + '.js';
  }
}

changeScene();
backNext();
