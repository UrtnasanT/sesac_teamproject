document.querySelector("#left_img").classList.remove("wolf-wind");
document.querySelector("#right_img").classList.remove("hidePig");

document.addEventListener("DOMContentLoaded", function () {
  appendObject();
});

function appendObject() {
  // 새로운 버튼 요소를 생성합니다.
  let newBtn = document.createElement("button");
  newBtn.className = "button";
  newBtn.innerHTML = `<p class="btnText">도망가기</p>
                      <div class="btnTwo">
                        <p class="btnText2">GO!</p>
                      </div>`;

  // 새로운 버튼을 .right 요소에 추가합니다.
  let rightDiv = document.querySelector(".right");
  rightDiv.appendChild(newBtn);

  // 버튼 클릭 이벤트 리스너 추가
  newBtn.addEventListener("click", function () {
    // 새로운 iframe 요소를 생성합니다.
    let iframe = document.createElement("iframe");
    iframe.src = "./maze/index.html";
    iframe.style.position = "absolute";
    iframe.style.top = "60%";
    iframe.style.left = "50%";
    iframe.style.transform = "translate(-50%, -60%)";
    iframe.style.width = "80vw";
    iframe.style.height = "60vh";
    iframe.style.border = "none";
    iframe.style.zIndex = "10";
    iframe.style.borderRadius = "25px";

    // 현재 페이지의 container 요소에 iframe을 추가합니다.
    let container = document.querySelector(".container");
    container.appendChild(iframe);

    window.addEventListener("message", function (event) {
      if (event.data === "finish") {
        // 현재 창 종료
        window.parent.postMessage("finish", "*");
      }
    });
    
    // 클릭된 버튼 제거
    newBtn.remove();
  });
}
document.querySelector("#btn_next").addEventListener("click", function () {
  // 버튼 클래스가 존재하는지 확인합니다.
  var buttonElement = document.querySelector(".button");

  // 버튼 클래스가 존재한다면 해당 요소를 제거합니다.
  if (buttonElement !== null) {
    buttonElement.remove();
  }
});

function tremblePig() {
  // # fadein으로 늑대와 돼지 등장, 3초 후 떠는 돼지

  // const pigTremble = document.getElementById("right_img");
  const pigTremble = document.querySelector(".pig_right");

  pigTremble.classList.add("vibration");
}

// appendObject 함수 호출
appendObject();
// tremblePig 함수 호출
tremblePig();

