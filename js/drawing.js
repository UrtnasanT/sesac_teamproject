// leftImg 요소를 가져옴
const leftImg = document.querySelector("#left_img");

let canvasCreated = false; // canvas가 생성되었는지 여부를 추적하는 변수

function createCanvas() {
  // 이미 생성된 경우에는 함수를 실행하지 않음
  if (canvasCreated) {
    return;
  }

  // 기존 캔버스를 제거합니다.
  const existingCanvas = document.getElementById("canvas_container");
  if (existingCanvas) {
    existingCanvas.remove();
  }

  const container = document.querySelector(".container");
  const canvasContainer = document.createElement("div");
  const text = document.createElement("div");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const completeBtn = document.createElement("button");

  container.appendChild(canvasContainer);
  canvasContainer.appendChild(completeBtn);
  canvasContainer.appendChild(canvas);
  canvasContainer.appendChild(text);

  canvasContainer.id = "canvas_container";
  text.id = "text";
  completeBtn.id = "complete_btn";
  text.innerHTML = `셋째 돼지의 집을 그려보자 <strong>줓</strong>`;
  completeBtn.innerText = "완성 !";

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
    window.addEventListener("resize", drawImageOnCanvas);
  }

  // 완성 버튼 클릭 시 다음 버튼 클릭, 캔버스 사라짐
  completeBtn.addEventListener("click", function () {
    const targetElement = document.getElementById("btn_next");
    targetElement.click();
    canvasContainer.remove();
    // canvas가 생성되었음을 표시
    canvasCreated = false;
  });
  // canvas가 생성되었음을 표시
  canvasCreated = true;
}

document.querySelector("#left_img").addEventListener("click", createCanvas);
