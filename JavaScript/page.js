const folderBtn = document.querySelector(".folder");
const folderContent = document.querySelector(".itemlist");

folderBtn.addEventListener("click", function() {
  if (folderContent.classList.contains("open")) {
    folderContent.classList.remove("open"); // 移除.open类
  } else {
    folderContent.classList.add("open"); // 添加.open类
  }
});