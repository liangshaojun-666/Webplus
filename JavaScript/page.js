const folderBtn = document.querySelector(".folder");
const folderContent = document.querySelector(".itemlist");
const foldImg = document.querySelector("#foldImg");

folderBtn.addEventListener("click", function () {
  if (folderContent.classList.contains("open")) {
    folderContent.classList.remove("open"); // 移除.open类
    foldImg.style.transform = "rotate(0deg)"; // 将旋转角度重置为0度
  } else {
    folderContent.classList.add("open"); // 添加.open类
    foldImg.style.transform = "rotate(180deg)"; // 旋转180度
  }
});
