let clicked = -1;
let initialWidth = 50;
let bars = Array.from(document.getElementsByClassName("progress-bar"));
let finishedButton = document.getElementById("finish-button");

function setWidths() {
  bars.forEach(function (el) {
    el.style.width = initialWidth + "%";
    el.children[0].innerHTML = initialWidth + "% &nbsp;";
  });
}

function finish() {
  if (clicked == 0) {
    setWidths();
    clicked = -1;
    finishedButton.innerText = "Finish";
    return;
  }

  if (clicked == -1) {
    clicked = 1;

    let width = initialWidth;
    let intervalId = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        clearInterval(intervalId);
        clicked = 0;
        finishedButton.innerText = "Reset";
      } else {
        width++;
        bars.forEach(function (el) {
          el.style.width = width + "%";
          el.children[0].innerHTML = width + "% &nbsp;";
        });
      }
    }
  }
}

setWidths();