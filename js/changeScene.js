import { fetchJsonAndDisplayData } from './fetch.js';
import { appendObject } from './buildHouse.js';

window.onload = function () {
  let sceneNum = 1;
  changeScene(sceneNum);
  backNext(sceneNum);
};


function backNext(sceneNum) {
  const btn_back = document.getElementById('btn_back');
  const btn_next = document.getElementById('btn_next');

  btn_back.onclick = function changeBackScene() {
    // console.log('back_btn');
    sceneNum--;
    changeScene(sceneNum);
  };

  btn_next.onclick = function changeNexkScene() {
    sceneNum++;
    changeScene(sceneNum);
  };
}

function changeScene(sceneNum) {
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
      changeStyle("firstScene");
      imgLeft.src = "./img/pigs_default.png";
      break;
    case 2:
      changeStyle("momAppear");
      imgLeft.src = "./img/pig_mom.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 3:
      changeStyle("buildHouse");
      imgLeft.src = "./img/pig1_straw_no.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 4:
      changeStyle("buildHouse");
      imgLeft.src = "./img/pig2_tree_no.png";
      imgRight.src = "./img/house_tree.png";
      break;
    case 6:
      changeStyle("buildHouse");
      imgLeft.src = "./img/pig3_birck_no.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 7:
      // 노트하는 장면
      changeStyle("knock");
      changeJs("vibration");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 8:
      // 돼지 집 날리는 장면
      changeStyle("flyingHouse");
      changeJs("flyingHouse");
      imgLeft.src = "./img/wolf_blow.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 12:
      changeStyle("buildHouse");
      imgLeft.src = "./img/pig3_birck_no.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 15:
      changeStyle("rideSmokeStack");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 16:
      changeStyle("burntWolf");
      imgLeft.src = "./img/pig_back2.png";
      imgRight.src = "./img/boil_pot1.png";
      break;
    case 17:
      changeStyle("finalScene");
      changeJs("finalScene");
      imgLeft.src = "./img/house_bric.png";
      imgRight.src = "./img/house_bric.png";
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
// function changeJs(js) {
//   console.log('changeJS');
//   let js_link = document.getElementById('changeJS');
//   if (js_link) {
//     js_link.src = './js/' + js + '.js';
//   }
// }
function changeJs(js) {
  console.log('changeJS');
  let jsUrl = './' + js + '.js';

  import(jsUrl)
    .then(() => {
      console.log(jsUrl + ' loaded successfully');
    })
    .catch((error) => {
      console.error('Error loading ' + jsUrl + ':', error);
    });
}

changeScene();
