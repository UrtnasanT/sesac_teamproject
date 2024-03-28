const container = document.querySelector(".container");
const contentTitle = document.querySelector(".contentTitle");
const contentSynopsys = document.querySelector(".contentSynopsys");
let isDragging = false;
let startX;
let startScrollLeft;
let maxScrollLeft;
let targetScrollLeft = 0; // 스크롤 목표 위치
let isScrolling = false; // 스크롤 중인지 여부
let isHovering = false; // 호버 중인지 여부

// 마우스 드래그로 스크롤
document.addEventListener("mousedown", (e) => {
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
document.addEventListener("wheel", (e) => {
  if (!isHovering) {
    e.preventDefault();
    targetScrollLeft += Math.sign(e.deltaY) * 60; // 스크롤 속도를 느리게 조정
    startSmoothScroll();
  } else {
    // 호버 중일 때는 contentSynopsys의 스크롤 동작
    contentSynopsys.scrollTop += Math.sign(e.deltaY) * 10;
  }
}, { passive: false }); // passive 속성을 false로 설정

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

// 마우스 호버로 시놉시스 및 제목 보이기
const books = document.querySelectorAll(".book");

books.forEach((book) => {
  const title = book.querySelector(".title");
  const synopsys = book.querySelector(".synopsys-text");

  book.addEventListener("mouseenter", () => {
    contentTitle.textContent = title.textContent;
    contentSynopsys.textContent = synopsys.textContent;
    isHovering = true; // 호버 중임을 표시
  });

  book.addEventListener("mouseleave", () => {
    contentTitle.textContent = "";
    contentSynopsys.textContent = "";
    isHovering = false; // 호버 해제됨을 표시
  });
});


window.onload = function () {
  // book 클래스를 가진 요소들을 모두 선택
  var books = document.querySelectorAll(".book");
  var container = document.querySelector(".container");

  // 스크롤인포 이미지 생성 및 추가
  var scrollInfo = document.querySelector(".scrollInfo");
  for (var i = 0; i < books.length; i++) {
    var img = document.createElement("img");
    img.className = "scrollspy";
    img.src = "./img/main/pencil2.png"; // 모든 이미지를 pencil2로 설정
    img.alt = "스크롤상태표시";
    scrollInfo.appendChild(img);
  }

  var scrollInfoImages = document.querySelectorAll(".scrollspy");

  // 각각의 book 클래스를 가진 요소에 대해 처리
  books.forEach(function (book, index) {
    // 호버 이벤트 리스너 추가
    book.addEventListener("mouseenter", function () {
      // 호버되면 해당 순서에 맞는 스크롤스파이 이미지로 변경
      scrollInfoImages[index].src = `./img/main/pencil3.png`;
      scrollInfoImages[index].style.transform = "scale(1.3)"; // 스케일 변경
    });

    book.addEventListener("mouseleave", function () {
      // 호버 해제 시 다시 기본 이미지로 변경하고 스케일 원래대로 조정
      scrollInfoImages[index].src = `./img/main/pencil2.png`;
      scrollInfoImages[index].style.transform = "scale(1)"; // 스케일 원래대로 변경
    });
  });

  // 스크롤 이벤트 추가
  container.addEventListener("scroll", function () {
    // container 요소의 중앙 좌표
    var containerCenterX =
      container.getBoundingClientRect().left + container.offsetWidth / 2;

    // 가장 가까운 book 요소를 찾기 위한 변수 초기화
    var closestBook = null;
    var closestDistance = Infinity;

    // book 요소를 순회하며 container 중앙에 가장 가까운 요소 찾기
    books.forEach(function (book) {
      // book 요소의 중앙 좌표
      var rect = book.getBoundingClientRect();
      var bookCenterX = (rect.left + rect.right) / 2;

      // container 중앙과의 거리 계산
      var distance = Math.abs(containerCenterX - bookCenterX);

      // 현재 book 요소가 이전에 확인한 가장 가까운 요소보다 더 가까울 때
      if (distance < closestDistance) {
        closestBook = book;
        closestDistance = distance;
      }
    });

    // 모든 scrollInfo 이미지 변경
    scrollInfoImages.forEach(function (img, index) {
      // 현재 가장 가까운 book 요소의 인덱스와 같으면 pencil1 이미지로 변경
      if (books[index] === closestBook) {
        img.src = `./img/main/pencil1.png`;
        img.style.transform = "scale(1.3)"; // 스케일 변경
      } else {
        // 그렇지 않으면 해당 순서에 맞는 pencil2 이미지로 변경
        img.src = `./img/main/pencil2.png`;
        img.style.transform = "scale(1)"; // 스케일 원래대로 변경
      }
    });
  });
};