document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuWrapper = document.querySelector(".menu-wrapper");
  hamburgerMenu.addEventListener("click", function () {
    if (
      menuWrapper.style.display === "none" ||
      menuWrapper.style.display === ""
    ) {
      menuWrapper.style.display = "flex";
    } else {
      menuWrapper.style.display = "none";
    }
  });
});
