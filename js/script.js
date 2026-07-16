document.querySelectorAll(".strange-stat").forEach(stat => {
    const title = stat.querySelector(".title");
    const rockOne = stat.querySelector(".rock-one");
    const rockTwo = stat.querySelector(".rock-two");
    const lastRock = document.querySelector(".last-rock");

    function checkBoth() {
    lastRock.textContent = title.textContent;
    stat.classList.remove("completed", "in-progress");
    

    if (rockOne.checked && rockTwo.checked) {
        stat.classList.add("completed");
    } else if (rockOne.checked || rockTwo.checked) {
        stat.classList.add("in-progress");
        lastRock.textContent = title.textContent;
    } 
  }

rockOne.addEventListener("change", checkBoth);
rockTwo.addEventListener("change", checkBoth);
});
