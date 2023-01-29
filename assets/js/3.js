elem = document.getElementById("ele1");
function pintar(color = "green") {
  elem.style.backgroundColor = color;
}
elem.addEventListener("click", () => {
  pintar("yellow");
});