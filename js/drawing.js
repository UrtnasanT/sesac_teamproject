const canvasContainer = document.createElement("div");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(canvas);

const img = new Image();
img.src = "./img/house_bric.png"; // 이미지 소스 설정

function drawImageOnCanvas() {
  const width = window.innerWidth * 0.8;
  const height = window.innerHeight * 0.8;

  canvas.width = width;
  canvas.height = height;

  // 이미지 그리기
  ctx.drawImage(img, 0, 0, width, height);
  ctx.lineWidth = 7;
}

// 이미지 로드 이벤트 리스너
img.onload = drawImageOnCanvas;

canvas.style.margin = "20px";
canvas.style.backgroundColor = "black";
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

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas를 비워줍니다.
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  window.addEventListener("resize", drawImageOnCanvas); // 창 크기가 변경될 때 Canvas 크기를 다시 설정하여 이미지를 다시 그립니다.
}
