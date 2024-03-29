import { fetchJsonAndDisplayData } from "./fetch.js";
import { appendObject } from "./buildHouse.js";

let currentCssLink = null;
let currentJsModule = null;

window.onload = function () {
  let sceneNum = 0;
  changeScene(sceneNum);
  backNext(sceneNum);
};

function backNext(sceneNum) {
  const btn_back = document.getElementById("btn_back");
  const btn_next = document.getElementById("btn_next");

  btn_back.onclick = function changeBackScene() {
    sceneNum--;
    changeScene(sceneNum);
  };

  btn_next.onclick = function changeNextScene() {
    sceneNum++;
    changeScene(sceneNum);
  };
}

function changeScene(sceneNum) {

  // CSS 및 JS 초기화
  if (currentCssLink) {
    currentCssLink.remove();
    currentCssLink = null;
  }
  if (currentJsModule) {
    currentJsModule
      .then((module) => {
        if (module && module.default) {
          module.default.unmount();
        }
        currentJsModule = null;
      })
      .catch((error) => {
        console.error("Error unloading current JS module:", error);
      });
  }

  fetchJsonAndDisplayData(sceneNum); // 자막 불러오기
  appendObject(sceneNum); // build-house 씬 오브젝트 추가
  changeImg(sceneNum); // 이미지 변경
}

// 이미지 바꾸는 함수
function changeImg(sceneNum) {
  let imgLeft = document.querySelector(".left img");
  let imgRight = document.querySelector(".right img");

  imgLeft.src = "";
  console.log("씬넘버", sceneNum);

  switch (sceneNum) {
    case 0:
      changeStyle("firstScene");
      changeJs("flyingBird");
      imgLeft.src = "./img/pigs_default.png";
      break;
    case 1:
      changeStyle("firstScene");
      changeJs("flyingBird");
      imgLeft.src = "./img/pigs_default.png";
      break;
    case 2:
      let birdElement = document.querySelector(".bird");
      if (birdElement) {
        birdElement.remove();
      }
      changeStyle("momAppear");
      imgLeft.src = "./img/pig_mom.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 3:
      changeJs("buildHouse");
      changeStyle("buildHouse");
      imgLeft.src = "./img/pig1_straw_no.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 4:
      changeStyle("buildHouse");
      changeJs("buildHouse");
      imgLeft.src = "./img/pig2_tree_no.png";
      imgRight.src = "./img/house_tree.png";
      break;
    case 5:
      // 설계도 장면 추가
      changeStyle("drawing");
      changeJs("drawing");
      imgLeft.src = "./img/sketchbook.png";
      imgRight.src = "./img/pig3_default.png";
      break;
    case 6:
      changeStyle("buildHouse");
      changeJs("buildHouse");
      imgLeft.src = "./img/pig3_birck_no.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 7:
      // 노크하는 장면
      changeStyle("knock");
      changeJs("vibration");
      imgLeft.src = "./img/wolf_drooling.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 8:
      // 첫째 돼지 집 날리는 장면
      changeStyle("flyingHouse");
      changeJs("flyingHouse");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/house_straw.png";
      break;
    case 9:
      // 첫째 돼지 덜덜 떠는 장면
      changeStyle("pig_tremble1");
      changeJs("tremble1");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/pig_tremble.png";
      break;
    case 10:
      // 둘째 돼지 집 노크
      changeStyle("knock");
      changeJs("vibration");
      imgLeft.src = "./img/wolf_drooling.png";
      imgRight.src = "./img/house_tree.png";
      break;
    case 11:
      // 둘째 집 날리기
      changeStyle("flyingHouse");
      changeJs("flyingHouse2");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/house_tree.png";
      break;
    case 12:
      // 첫째, 둘째 돼지 덜덜 떠는 장면
      changeStyle("pig_tremble2");
      changeJs("tremble2");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/pig_tremble.png";
      break;
    case 13:
      // 셋째 돼지 집 노크
      document.querySelector("#right_img")
      changeStyle("knock");
      imgLeft.src = "./img/wolf_drooling.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 14:
      // 늑대 몸통 박치기
      changeStyle("wolfCrash");
      imgLeft.src = "./img/wolf_crash.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 15:
      // 늑대 지붕 타기
      changeStyle("rideSmokeStack");
      imgLeft.src = "./img/wolf_default.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 16:
      changeStyle("burntWolf");
      imgLeft.src = "./img/pig_back2.png";
      imgRight.src = "./img/boil_pot.png";
      break;
    case 17:
      document.querySelector("#object_wolf").style.display = "none";
      changeStyle("finalScene");
      changeJs("finalScene");
      imgLeft.src = "./img/house_bric.png";
      imgRight.src = "./img/house_bric.png";
      break;
    case 18:
      window.close(); // 창 종료
      break;
  }
}

function changeStyle(css) {
  const cssUrl = "./css/" + css + ".css";

  // 현재 CSS 링크가 있다면 제거합니다.
  if (currentCssLink) {
    currentCssLink.remove();
    currentCssLink = null; // 현재 CSS 링크를 초기화합니다.
  }

  // 새로운 CSS 링크를 생성하고 추가합니다.
  const newCssLink = document.createElement("link");
  newCssLink.rel = "stylesheet";
  newCssLink.type = "text/css";
  newCssLink.href = cssUrl;
  document.head.appendChild(newCssLink);

  // 현재 CSS 링크를 저장합니다.
  currentCssLink = newCssLink;
}

function changeJs(js) {
  console.log("changeJS");
  let jsUrl = "./" + js + ".js";

  // 현재 모듈이 있다면 언로드합니다.
  if (currentJsModule) {
    currentJsModule
      .then((module) => {
        if (module && module.default) {
          module.default.unmount();
        }
      })
      .catch((error) => {
        console.error("Error unloading current JS module:", error);
      });
  }

  // 새로운 모듈을 로딩합니다.
  currentJsModule = import(jsUrl)
    .then((module) => {
      console.log(jsUrl + " loaded successfully");
      return module;
    })
    .catch((error) => {
      console.error("Error loading " + jsUrl + ":", error);
    });
}
