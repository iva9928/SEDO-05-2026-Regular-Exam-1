document.addEventListener('DOMContentLoaded', function() {
  var applyBtn = document.getElementById('apply-btn');
  var randomBtn = document.getElementById('random-btn');
  var colorInput = document.getElementById('color-input');
  var box = document.getElementById('box');

  if (!applyBtn || !randomBtn || !colorInput || !box) {
    return;
  }

  function setBoxColor(color) {
    box.style.backgroundColor = color;
  }

  applyBtn.addEventListener('click', function() {
    setBoxColor(colorInput.value);
  });

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  randomBtn.addEventListener('click', function() {
    setBoxColor(getRandomColor());
  });
});