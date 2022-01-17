"use strict";

const anchors = document.getElementsByTagName("a");
const burger = document.getElementById("burger");

burger.addEventListener("click", function () {
  for (var x of anchors) {
    x.classList.toggle("block");
  }
  this.classList.toggle("rotateZ");
});

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", function () {
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].classList.remove("selected");
    }
    this.classList.add("selected");
  });
}
