document.querySelectorAll(".strange-stat").forEach((stat, index) => {
    
    const strangeTitle = stat.querySelector(".strange-title");
    const strangeRockOne = stat.querySelector(".strange-rock-one");
    const strangeRockTwo = stat.querySelector(".strange-rock-two");
    const lastStrangeRock = document.querySelector(".last-strange-rock");

    // haetaan tallennetut arvot tässä
    const savedStrangeRockOne = localStorage.getItem("strangerock1-" + index);
    const savedStrangeRockTwo = localStorage.getItem("strangerock2-" + index);
    
    //jos tallennettu arvo on "true", rastita checkbox
    if(savedStrangeRockOne === "true") {
        strangeRockOne.checked = true;
    }
    if(savedStrangeRockTwo === "true") {
        strangeRockTwo.checked = true;
    }

    function checkBoth() {

    stat.classList.remove("completed", "in-progress");

    if (strangeRockOne.checked && strangeRockTwo.checked) {
        stat.classList.add("completed");
        
    } else if (strangeRockOne.checked || strangeRockTwo.checked) {
        stat.classList.add("in-progress");
    } 

    //Tallenna checkboxien tilat
    localStorage.setItem("strangerock1-" + index, strangeRockOne.checked);
    localStorage.setItem("strangerock2-" + index, strangeRockTwo.checked);
  }

  //päivitä classit heti sivun latautuessa
  checkBoth();
  
strangeRockOne.addEventListener("change", checkBoth);
strangeRockTwo.addEventListener("change", checkBoth);
});
