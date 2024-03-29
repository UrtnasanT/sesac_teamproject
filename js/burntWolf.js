// document.addEventListener('DOMContentLoaded', function () {
//   let objectImg = document.getElementById('object');
//   let rightImg = document.getElementById('right_img');

//   objectImg.addEventListener('dragstart', function (event) {
//     event.dataTransfer.setData('text', event.target.id);
//   });

//   rightImg.addEventListener('dragover', function (event) {
//     event.preventDefault();
//   });

//   rightImg.addEventListener('drop', function (event) {
//     event.preventDefault();
//     let data = event.dataTransfer.getData('text');
//     let draggedElement = document.getElementById(data);

//     if (draggedElement && draggedElement.id === 'object') {
//       rightImg.src = './img/boil_pot2.png';
//       startAnimation();
//       setTimeout(() => {
//         rightImg.src = './img/boil_pot.png';
//       }, 250);
//     }
//   });
// });

function startAnimation() {
  let box = document.getElementById('object_wolf');
  box.classList.add('animate'); // 애니메이션을 시작하는 클래스 추가
  
}
