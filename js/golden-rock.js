document.querySelectorAll(".golden-stat").forEach((stat, index) => {

    const goldenTitle = stat.querySelector(".golden-title");
    const goldenRockOne = stat.querySelector(".golden-rock-one");
    const goldenRockTwo = stat.querySelector(".golden-rock-two");
    const lastGoldenRock = document.querySelector(".last-golden-rock");

    // haetaan tallennetut arvot tässä
    const savedGoldenRockOne = localStorage.getItem("goldenrock1-" + index);
    const savedGoldenRockTwo = localStorage.getItem("goldenrock2-" + index);

    //jos tallennettu arvo on "true", rastita checkbox
    if(savedGoldenRockOne === "true") {
        goldenRockOne.checked = true;
    }
    if(savedGoldenRockTwo === "true") {
        goldenRockTwo.checked = true;
    }

    function checkBoth() {
    
    stat.classList.remove("completed", "in-progress");
    
    if (goldenRockOne.checked && goldenRockTwo.checked) {
        stat.classList.add("completed");

    } else if (goldenRockOne.checked || goldenRockTwo.checked) {
        stat.classList.add("in-progress");
    } 

    //Tallenna checkboxien tilat
    localStorage.setItem("goldenrock1-" + index, goldenRockOne.checked);
    localStorage.setItem("goldenrock2-" + index, goldenRockTwo.checked);
  }

  //päivitä classit heti sivun latautuessa
  checkBoth();

goldenRockOne.addEventListener("change", checkBoth);
goldenRockTwo.addEventListener("change", checkBoth);
});