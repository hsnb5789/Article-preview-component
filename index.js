const shareBtn = document.querySelector(".share-btn");
const shareActive = document.querySelector(".active");
const shareBtn1 = document.querySelector(".share-btn1");

shareBtn.addEventListener("click", () => {
  shareActive.classList.toggle("active");
});

shareBtn1.addEventListener("click", () => {
  shareActive.classList.toggle("active");
});
