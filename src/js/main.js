"use strict";

const cards = document.querySelectorAll(".main-card");

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));
