document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll("button").forEach(function (el) {
        el.addEventListener("click", function () {
          console.log(el.textContent);
        });
    });
})