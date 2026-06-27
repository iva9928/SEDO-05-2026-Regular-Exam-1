document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

document.getElementById('random-btn').addEventListener('click', function() {
  var color = getRandomColor();
  document.getElementById('box').style.backgroundColor = color;
});