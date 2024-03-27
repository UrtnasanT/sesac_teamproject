const canvasContainer = document.createElement("div");
const text = document.createElement("div");
const canvas = document.createElement("canvas");
const completeBtn = document.createElement("button");
const ctx = canvas.getContext("2d");
const leftImg = document.querySelector("#left_img");
const targetElement = document.getElementById("btn_next");
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(completeBtn);
canvasContainer.appendChild(canvas);
canvasContainer.appendChild(text);

canvasContainer.id = "canvas_container";
text.id = "text";
completeBtn.id = "complete_btn";
text.innerHTML = `셋째 돼지의 집을 그려보자 <strong>줓</strong>`;
completeBtn.innerText = "완성 !";

// 설계도 클릭 시 캔버스 사라짐
leftImg.addEventListener("click", function () {
  canvasContainer.style.visibility = "visible";
});

// 완성 버튼 클릭 시 다음 버튼 클릭, 캔버스 사라짐
completeBtn.addEventListener("click", function () {
  targetElement.click();
  canvasContainer.style.visibility = "hidden";
});

const img = new Image();
img.src = "./img/sketch.png"; // 이미지 소스 설정
img.id = "sketchbook";

function drawImageOnCanvas() {
  const width = window.innerWidth * 0.65;
  const height = window.innerHeight * 0.65;

  canvas.width = width;
  canvas.height = height;
  ctx.lineWidth = 14;

  // 이미지 그리기
  ctx.drawImage(img, 5, 30, width, height);
}
// 이미지 로드 이벤트 리스너
img.onload = drawImageOnCanvas;

canvas.style.margin = "20px";
// canvas.style.backgroundColor = "black";
canvas.style.cursor = "pointer";

let painting = false;

function stopPainting(event) {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  window.addEventListener("resize", drawImageOnCanvas); // 창 크기가 변경될 때 Canvas 크기를 다시 설정하여 이미지를 다시 그립니다.
}
