document.addEventListener("DOMContentLoaded", function(){
  var btns = document.querySelectorAll('.btn-trigger');
  const nav = document.getElementById('nav');

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      this.classList.toggle("active");
      nav.classList.toggle("open");
    }, false);
  }
}, false);