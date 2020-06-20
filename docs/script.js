let popup1 = document.querySelector("#open1");
let popup2 = document.querySelector("#open2");
let popup3 = document.querySelector('#open3');
let close = document.querySelector('#close');
let popupWindow = document.querySelector('.popup');

popup1.onclick = function() {
    popupWindow.classList.remove('hidden');
  };
popup2.onclick = function() {
    popupWindow.classList.remove('hidden');
  };
popup3.onclick = function() {
    popupWindow.classList.remove('hidden');
  };
close.onclick = function() {
    popupWindow.classList.add('hidden');
}
addEventListener("keydown", function(event) {
    if (event.keyCode === 27)
        popupWindow.classList.add('hidden');
  });