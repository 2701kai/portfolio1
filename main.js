document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuWrapper = document.querySelector(".menu-wrapper");

  // Event-Listener for the Hamburger-Menu
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

  // Event-Listener for Sublinks
  const subLinks = document.querySelectorAll(".menu-wrapper a");
  subLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuWrapper.style.display = "none";
    });
  });
});
