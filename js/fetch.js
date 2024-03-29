function fetchJsonAndDisplayData(sceneNumber) {
  // json 파일 fetch
  fetch('./js/TheThreeLittlePigs.json')
    .then((res) => res.json())
    .then((data) => {
      const filteredData = filterDataBySceneNumber(data, sceneNumber);
      displayDataWithLineBreaks(filteredData);
    })
    // .catch((err) => console.error('err : ', err));
}

// 원하는 scene을 가져오기
function filterDataBySceneNumber(data, sceneNumber) {
  return data.filter((item) => item.scene === sceneNumber);
}

function displayDataWithLineBreaks(data) {
  const jsonDataDiv = document.getElementById("json-data");

  jsonDataDiv.innerHTML = ''; // 초기화

  data.forEach((item) => {
    const sceneDiv = document.createElement('div');
    // "\n"을 <br> 태그로 치환하여 줄바꿈 처리
    const contentWithLineBreaks = item.content.replace(/\n/g, '<br>');
    sceneDiv.innerHTML = `
        <p>${contentWithLineBreaks}</p>
      `;
    jsonDataDiv.appendChild(sceneDiv);
  });
}

export { fetchJsonAndDisplayData };
