window.addEventListener("message", function (event) {
  if (event.data === "finish") {
    // 3초 뒤에 자식 창을 닫음
    setTimeout(function () {
      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        // 자식 창이라면 닫음
        if (iframe.contentWindow === event.source) {
          iframe.parentNode.removeChild(iframe);
        }
      });
    }, 2000); // 3000 밀리초 = 3초
  }
});
