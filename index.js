document.addEventListener("DOMContentLoaded", function () {
  var readMoreBtn = document.querySelectorAll(".button");
  var content = document.querySelector(".text");

  readMoreBtn.addEventListener("click", function () {
    content.classList.toggle("expand");
    if (content.classList.contains("expand")) {
      readMoreBtn.textContent = "Read Less";
      // document.getElementById ("button1").style.display = 'none'
    } else {
      readMoreBtn.textContent = "Read More";
    }
  });
});
