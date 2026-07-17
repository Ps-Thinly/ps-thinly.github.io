document.querySelectorAll(".strange-stat").forEach(stat => {
    const strangeTitle = stat.querySelector(".strange-title");
    const strangeRockOne = stat.querySelector(".strange-rock-one");
    const strangeRockTwo = stat.querySelector(".strange-rock-two");
    const lastStrangeRock = document.querySelector(".last-strange-rock");

    function checkBoth() {
    lastStrangeRock.textContent = strangeTitle.textContent;
    stat.classList.remove("completed", "in-progress");
    

    if (strangeRockOne.checked && strangeRockTwo.checked) {
        stat.classList.add("completed");
    } else if (strangeRockOne.checked || strangeRockTwo.checked) {
        stat.classList.add("in-progress");
        lastStrangeRock.textContent = strangeTitle.textContent;
    } 
  }

strangeRockOne.addEventListener("change", checkBoth);
strangeRockTwo.addEventListener("change", checkBoth);
});
