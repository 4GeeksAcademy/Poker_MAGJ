import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomItem(myArray) {
  let index = Math.floor(Math.random() * myArray.length);
  return myArray[index];
}

window.onload = function () {

  const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const figures = ["♥","♦","♠","♣"];

  const value = getRandomItem(values);
  const figure = getRandomItem(figures);

  const card = document.getElementById("card");

  if (figure === "♥" || figure === "♦") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }

  card.innerHTML = `
    <div>
      ${value}<br>${figure}
    </div>

    <div class="center">
      ${figure}
    </div>

    <div class="bottom">
      ${value}<br>${figure}
    </div>
  `;
};
