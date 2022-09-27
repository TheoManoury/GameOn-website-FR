function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeModalBtn = document.getElementById("close-button")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// close modal event
closeModalBtn.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalBg.style.display = "block"
}

// close modal form
function closeModal() {
  modalBg.style.opacity = "0"
  modalBg.style.transform = "translateY(-150px)"
  setTimeout(() => {
    modalBg.style.display = "none"
    modalBg.style.removeProperty("opacity")
    modalBg.style.removeProperty("transform")
  }, 800)
}
