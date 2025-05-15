window.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".slider-img");
  let btnPrev = document.querySelector("#btn-prev");
  let btnNext = document.querySelector("#btn-next");
  let current = 0;
  let interval;

  function showImage(index) {
    images.forEach((img) => {
      img.classList.remove("active");
    });
    images[index].classList.add("active");
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }
  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
  function startSlider() {
    interval = setInterval(nextImage, 2000);
  }
  function resetSlider() {
    clearInterval(interval);
    startSlider();
  }

  btnPrev.addEventListener("click", function () {
    prevImage();
    resetSlider();
  });
  btnNext.addEventListener("click", function () {
    nextImage();
    resetSlider();
  });

  showImage(current);
  startSlider();
});
