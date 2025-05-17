document.addEventListener('DOMContentLoaded', function(){var check=document.querySelector('.check');
check.checked=window.location.href.includes('assets/in/ingles.html');
check.addEventListener('click', idioma);function idioma() {

    var inglesUrl = "assets/in/ingles.html";
    var indexUrl = "/index.html";

    if (check.checked && !window.location.href.endsWith(inglesUrl)) {
      window.location.href = inglesUrl;
    } else if (!check.checked && !window.location.href.endsWith(indexUrl)) {
      window.location.href = indexUrl;
    }
  }
});