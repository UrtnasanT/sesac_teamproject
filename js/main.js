const container = document.querySelector(".container");
const images = document.querySelectorAll(".container img");

let isDragging = false;
let startX;
let startScrollLeft;
let maxScrollLeft;

container.addEventListener("mousemove", (e) => {
  if (e.buttons !== 1) return; // 마우스 버튼이 눌려있지 않으면 종료
  if (!isDragging) {
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = container.scrollLeft;
    maxScrollLeft = container.scrollWidth - container.clientWidth;
  }

  e.preventDefault();
  const movementX = e.pageX - startX;
  const newScrollLeft = startScrollLeft - movementX;
  container.scrollLeft = Math.min(maxScrollLeft, Math.max(0, newScrollLeft));
  const constrainedMovementX = container.scrollLeft - startScrollLeft;
  moveImages(constrainedMovementX);
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = Math.sign(e.deltaY);
  const newScrollLeft = container.scrollLeft + delta * 50;
  if (newScrollLeft < 0 || newScrollLeft > maxScrollLeft) return;
  container.scrollLeft = newScrollLeft;
  const constrainedMovementX = container.scrollLeft - startScrollLeft;
  moveImages(constrainedMovementX);
});

// 이미지가 스크롤 방향에 따라 움직이는 함수
function moveImages(constrainedMovementX) {
  // 이미지가 움직일 수 있는 최소와 최대 위치 설정
  const minMovement = -100; // 왼쪽으로 움직일 수 있는 최대 거리
  const maxMovement = 100; // 오른쪽으로 움직일 수 있는 최대 거리

  // 이동 거리를 제한하여 이미지가 특정 너비 내에서만 움직이도록 함
  const clampedMovementX = Math.max(
    minMovement,
    Math.min(maxMovement, constrainedMovementX)
  );

  images.forEach((image) => {
    // 호버된 요소인 경우에는 이동 효과를 제거합니다.
    if (!image.parentElement.classList.contains("hovered")) {
      image.style.transform = `translateX(calc(-50% ${clampedMovementX}px))`;
    }
  });

  // 스크롤이 끝에 도달했을 때 새로운 콘텐츠를 로드하는 로직 추가
  if (container.scrollLeft === maxScrollLeft) {
    // 여기에 새로운 콘텐츠를 로드하는 코드를 작성합니다.
    // 새로운 이미지를 가져오거나 기타 동작을 수행할 수 있습니다.
    console.log("End of scroll reached. Load more content here.");
  }
}

// 호버된 요소에 대한 이벤트 리스너 추가
document.querySelectorAll(".container > div").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // 호버된 요소에 대한 클래스 추가
    item.classList.add("hovered");
  });

  item.addEventListener("mouseleave", () => {
    // 호버가 해제되면 클래스 제거
    item.classList.remove("hovered");
  });
});
