document.addEventListener("DOMContentLoaded", function(){
var btn01 = document.getElementById('btn01');

btn01.addEventListener('click', function() {
  if (btn01.classList.contains('active')) {
    btn01.classList.remove("active");
  } else {
    btn01.classList.add("active");
  }
});

var btn02 = document.getElementById('btn02');

btn02.addEventListener('click', function() {
  if (btn02.classList.contains('active')) {
    btn02.classList.remove("active");
  } else {
    btn02.classList.add("active");
  }
});
}, false);