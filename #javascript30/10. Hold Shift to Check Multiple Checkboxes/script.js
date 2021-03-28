const inputs = document.querySelectorAll('input[type="checkbox"]');
const inputAsArray = [...inputs];
let lastIndex;

function determineIndex(target) {
  return inputAsArray.findIndex((input) => input === target);
}

function setLastInput({ target, shiftKey }) {
  const currentIndex = determineIndex(target);

  if (shiftKey && Number.isInteger(lastIndex)) {
    const inBetween = inputAsArray.slice(
      Math.min(currentIndex, lastIndex) + 1,
      Math.max(currentIndex, lastIndex)
    );

    inBetween.forEach((input) => (input.checked = true));
  }

  lastIndex = currentIndex;
}

inputs.forEach((input) => {
  input.addEventListener("click", setLastInput);
});
