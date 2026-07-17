document.querySelectorAll(".golden-stat").forEach(stat => {
    const goldenTitle = stat.querySelector(".golden-title");
    const goldenRockOne = stat.querySelector(".golden-rock-one");
    const goldenRockTwo = stat.querySelector(".golden-rock-two");
    const lastGoldenRock = document.querySelector(".last-golden-rock");

    function checkBoth() {
    lastGoldenRock.textContent = goldenTitle.textContent;
    stat.classList.remove("completed", "in-progress");
    

    if (goldenRockOne.checked && goldenRockTwo.checked) {
        stat.classList.add("completed");
    } else if (goldenRockOne.checked || goldenRockTwo.checked) {
        stat.classList.add("in-progress");
        lastGoldenRock.textContent = goldenTitle.textContent;
    } 
  }

goldenRockOne.addEventListener("change", checkBoth);
goldenRockTwo.addEventListener("change", checkBoth);
});