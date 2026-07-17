const button = document.querySelector("#reset-button");

button.addEventListener("click", () => {
    console.log("Nappia klikattiin!");
    localStorage.clear();
    location.reload();
});