function scrollAddClass() {
    const scrollEffect = document.querySelectorAll(
      ".js-scroll-lead, .js-scroll-fadeTxt, .js-scroll-fadeUp, .js-scroll-fadeUp-delay, .js-scroll-logo, .js-scroll-boyoyonn"
    );
    let windowHeight = window.innerHeight;
    for (let i = 0; i < scrollEffect.length; i++) {
      target = scrollEffect[i].getBoundingClientRect().top;
      if (target < windowHeight) {
        scrollEffect[i].classList.add("is-active");
      }
    }
  }
  document.addEventListener("DOMContentLoaded", scrollAddClass);
  document.addEventListener("scroll", scrollAddClass);
  