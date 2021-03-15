const panels = document.querySelectorAll(".panel");

function togglePanel() {
  panels.forEach((panel) => {
    if (this !== panel) {
      panel.classList.remove("open");
    }

    this.classList.toggle("open");
  });
}
function activePanel(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("panel_active");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", togglePanel);
  panel.addEventListener("transitionend", activePanel);
});
