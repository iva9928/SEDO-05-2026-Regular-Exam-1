class UserService {
  static getSelectedColor(colorInput) {
    return colorInput.value;
  }

  static getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  static updateBoxColor(box, color) {
    box.style.backgroundColor = color;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const applyBtn = document.getElementById('apply-btn');
  const randomBtn = document.getElementById('random-btn');
  const colorInput = document.getElementById('color-input');
  const box = document.getElementById('box');

  if (!applyBtn || !randomBtn || !colorInput || !box) {
    return;
  }

  applyBtn.addEventListener('click', function() {
    const color = UserService.getSelectedColor(colorInput);
    UserService.updateBoxColor(box, color);
  });

  randomBtn.addEventListener('click', function() {
    const color = UserService.getRandomColor();
    UserService.updateBoxColor(box, color);
  });
});