const vibration = (target) => {
  target.classList.add('vibration');

  setTimeout(function () {
    target.classList.remove('vibration');
  }, 400);
};

// 이미지 클릭 시 애니메이션 실행
document.getElementById('right_img').addEventListener('click', function () {
  console.log('vibration 실행');
  const image = this; // 클릭된 이미지 요소
  vibration(image); // 애니메이션 함수 호출
});
