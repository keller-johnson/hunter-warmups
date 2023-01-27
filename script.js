const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const mintBtn = document.getElementById("mint-button");
const modal = document.getElementById("modal-overlay");
const close = document.getElementById("close");
const connect = document.getElementById("connect");
const connectDT = document.getElementById("connectDT");

function toggleNav() {
  //Toggle- menu bars open and closed
  menuBars.classList.toggle("change");
  //Toggle- menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate- in overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    //Animation- in nav items
    navAniamtion("out", "in");
  } else {
    //Animate- slide out
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    //Animation- out nav items
    navAniamtion("in", "out");
  }
}

function connected() {
  connectDT.classList.toggle("wallet");
  if (connectDT.classList.contains("wallet")) {
    connectDT.innerHTML = "connected";
  } else {
    connectDT.innerHTML = "connect wallet";
  }

  connect.classList.toggle("wallet");
  if (connect.classList.contains("wallet")) {
    connect.innerHTML = "connected";
  } else {
    connect.innerHTML = "connect wallet";
  }
}

// if wallet is connected change connect wallet to connected

//if wallet is connected and clicks mint now => modal appears with mint amount / total price and mint now button

//if wallet isnt connected and clicks mint now go to connect wallet

// Eventlistener
// connect.addEventListener("click", connected);
// connectDT.addEventListener("click", connected);
menuBars.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

// When the user clicks on the button, open the modal
// mintBtn.onclick = function () {
//   modal.style.display = "flex";
// };

// // When the user clicks on (x), close the modal
// close.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
