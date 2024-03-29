var voices = [];
var isPaused = false; // 음성 재생이 일시정지되었는지 여부를 나타내는 변수
var isMuted = false; // 음소거 여부를 나타내는 변수
var utterThis = new SpeechSynthesisUtterance();
var volumeRange = document.getElementById("volumeRange");
var muteButton = document.getElementById("muteButton"); // 음소거 버튼 가져오기

function setVoiceList() {
  voices = window.speechSynthesis.getVoices();
}

setVoiceList();

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = setVoiceList;
}

function speech(txt) {
  if (!window.speechSynthesis) {
    alert(
      "음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요"
    );
    return;
  }

  // 음성 합성 데이터가 로드되지 않은 경우
  if (voices.length === 0) {
    setVoiceList(); // 음성 합성 데이터 다시 로드
    return; // 함수 종료
  }

  var lang = "ko-KR";

  utterThis.text = txt;
  utterThis.onend = function (event) {};

  utterThis.onerror = function (event) {
    // console.log("error", event);
  };

  var voiceFound = false;

  for (var i = 0; i < voices.length; i++) {
    if (
      voices[i].lang.indexOf(lang) >= 0 ||
      voices[i].lang.indexOf(lang.replace("-", "_")) >= 0
    ) {
      utterThis.voice = voices[i];
      voiceFound = true;
    }
  }

  utterThis.lang = lang;
  utterThis.pitch = 1;
  utterThis.rate = 1;

  // 음소거 상태에 따라 볼륨 설정
  if (isMuted) {
    utterThis.volume = 0; // 음소거 상태일 때 볼륨을 0으로 설정
  } else {
    // 음소거 상태가 아닐 때 볼륨은 슬라이더에서 가져온 값으로 설정
    utterThis.volume = parseFloat(volumeRange.value);
  }

  window.speechSynthesis.cancel(); // 이전 음성 중지
  window.speechSynthesis.speak(utterThis); // 새로운 음성 재생
}

function tts() {
  var t = document.getElementById("json-data");
  speech(t.innerText);
}

var jsonDataElement = document.getElementById("json-data");

if (jsonDataElement) {
  tts(); // 초기 음성 실행

  // MutationObserver 추가
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        tts(); // 변경된 내용이 있을 때마다 음성 실행
      }
    });
  });

  observer.observe(jsonDataElement, { childList: true });

  // 재생/일시정지 버튼 클릭 이벤트 처리
  var playPauseButton = document.getElementById("playPause");
  playPauseButton.addEventListener("click", function () {
    if (!isPaused) {
      // 현재 재생 중이라면 일시정지
      window.speechSynthesis.pause();
      isPaused = true;
    } else {
      // 현재 일시정지 중이라면 다시 재생
      window.speechSynthesis.resume();
      isPaused = false;
    }
  });

  // 페이지 새로고침 시 음성 중지
  window.addEventListener("beforeunload", function () {
    window.speechSynthesis.cancel();
  });
}

// 볼륨 조절 이벤트 처리
volumeRange.addEventListener("input", function (event) {
  var volume = parseFloat(event.target.value);
  utterThis.volume = volume;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterThis);
});

// 음소거 버튼 클릭 이벤트 처리
muteButton.addEventListener("click", function () {
  if (!isMuted) {
    // 음소거 상태가 아니라면 음소거로 변경
    window.speechSynthesis.cancel(); // 현재 음성 중지
    isPaused = false; // 음소거 상태일 때는 일시정지 상태도 해제
    utterThis.volume = 0;
    isMuted = true;
    muteButton.innerText = "음소거 해제";
  } else {
    // 음소거 상태라면 음소거 해제
    utterThis.volume = parseFloat(volumeRange.value);
    isMuted = false;
    muteButton.innerText = "음소거";
    // 음소거가 해제되면 다시 음성을 처음부터 재생
    tts();
  }
});
