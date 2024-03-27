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
    // 페이지 이동
    window.location.href = "./maze/index.html";
  });
}


function tremblePig() {
  // # fadein으로 늑대와 돼지 등장, 3초 후 떠는 돼지

  // const pigTremble = document.getElementById("right_img");
  const pigTremble = document.querySelector(".pig_right");

  setTimeout(() => pigTremble.classList.add("vibration"));
}

// appendObject 함수 호출
appendObject();
// tremblePig 함수 호출
tremblePig();
