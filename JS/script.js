// const slider = document.querySelector(".slider");
// let currentIndex = 0;
// const slideWidth = slider.clientWidth;
// const slideInterval = 3000; // 3 seconds

// function moveSlider() {
//   currentIndex++;
//   if (currentIndex >= slider.children.length) {
//     slider.style.transition = "none";
//     currentIndex = 0;
//     slider.style.transform = `translateX(0px)`;
//     setTimeout(() => {
//       slider.style.transition = "transform 0.5s ease-in-out";
//       currentIndex++;
//       slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//     }, 50);
//   } else {
//     slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//   }
// }

// setInterval(moveSlider, slideInterval);
const slider = document.querySelector("[data-slider]");

const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

if (track) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  });

  track.addEventListener("scroll", () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}
