function changeHandle() {
  const postfix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + postfix
  );
}

const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) => {
  input.addEventListener("change", changeHandle);
  input.addEventListener("mousemove", changeHandle);
});
