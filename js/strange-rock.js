//etitään html-koodista kyseinen classi
const lastStrangeRock = document.querySelector(".last-strange-rock");
//otetaan localstoragesta last strange rock itemi
const savedLastStrangeRock = localStorage.getItem("lastStrangeRock");

if (savedLastStrangeRock !== null) {
    lastStrangeRock.textContent = savedLastStrangeRock;
}

document.querySelectorAll(".strange-stat").forEach((stat, index) => {
    const strangeTitle = stat.querySelector(".strange-title");
    const strangeRockOne = stat.querySelector(".strange-rock-one");
    const strangeRockTwo = stat.querySelector(".strange-rock-two");

    // haetaan tallennetut arvot
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
  
strangeRockOne.addEventListener("change", () => {
    localStorage.setItem("lastStrangeRock", strangeTitle.textContent);
    lastStrangeRock.textContent = strangeTitle.textContent;
    checkBoth();
});
strangeRockTwo.addEventListener("change", () => {
    localStorage.setItem("lastStrangeRock", strangeTitle.textContent);
    lastStrangeRock.textContent = strangeTitle.textContent;
    checkBoth();
});
});
