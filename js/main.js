const container = document.querySelector(".container");

let isDragging = false;
let startX;
let startScrollLeft;
let maxScrollLeft;
let targetScrollLeft = 0; // 스크롤 목표 위치
let isScrolling = false; // 스크롤 중인지 여부

// 마우스 드래그로 스크롤
container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = container.scrollLeft;
  maxScrollLeft = container.scrollWidth - container.clientWidth;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  e.preventDefault();
  const movementX = e.pageX - startX;
  const newScrollLeft = startScrollLeft - movementX;
  container.scrollLeft = Math.min(maxScrollLeft, Math.max(0, newScrollLeft));

  // 마우스 드래그 중에도 부드러운 스크롤 효과를 적용하기 위해 targetScrollLeft 값을 조절합니다.
  targetScrollLeft = container.scrollLeft;
});

// 드래그 종료
document.addEventListener("mouseup", () => {
  isDragging = false;
});

// 마우스 휠로 스크롤
container.addEventListener("wheel", (e) => {
  e.preventDefault();
  targetScrollLeft += Math.sign(e.deltaY) * 20 * 2; // 스크롤 속도를 느리게 조정
  startSmoothScroll();
});

// 부드러운 스크롤 실행
function startSmoothScroll() {
  if (!isScrolling) {
    requestAnimationFrame(smoothScroll);
  }
  isScrolling = true;
}

// 부드러운 스크롤 처리
function smoothScroll() {
  const diff = targetScrollLeft - container.scrollLeft;
  const ease = 0.1; // 이동을 완화시키기 위한 계수
  container.scrollLeft += diff * ease; // 스크롤 이동 속도를 조절
  if (Math.abs(diff) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}

// 스크롤 이벤트에 대한 핸들러
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  document.getElementById("scrollPosition").textContent = scrollPosition + "px";
});

// 스크롤 이벤트에 대한 핸들러
container.addEventListener("scroll", function () {
  var scrollPosition = container.scrollLeft; // 스크롤 위치를 container.scrollLeft로 변경
  document.getElementById("scrollPosition").textContent = scrollPosition + "px";
});

