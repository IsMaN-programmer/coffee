document.addEventListener("DOMContentLoaded", function () {
  const homeBtn = document.getElementById("home-btn");
  const shopBtn = document.getElementById("shop-btn");
  const supportBtn = document.getElementById("support-btn");
  const newsBtn = document.getElementById("news-btn");
  const homeSection = document.getElementById("home-section");
  const shopSection = document.getElementById("shop-section");
  const supportSection = document.getElementById("support-section");
  const newsSection = document.getElementById("news-section");

  homeBtn.addEventListener("click", function () {
    homeSection.style.display = "block";
    shopSection.style.display = "none";
    supportSection.style.display = "none";
    newsSection.style.display = "none";
  });

  shopBtn.addEventListener("click", function () {
    homeSection.style.display = "none";
    shopSection.style.display = "block";
    supportSection.style.display = "none";
    newsSection.style.display = "none";
  });
  
   supportBtn.addEventListener("click", function () {
    homeSection.style.display = "none";
    shopSection.style.display = "none";
    supportSection.style.display = "block";
    newsSection.style.display = "none";
  });
  
   newsBtn.addEventListener("click", function () {
    homeSection.style.display = "none";
    shopSection.style.display = "none";
    supportSection.style.display = "none";
    newsSection.style.display = "block";
  });
});

