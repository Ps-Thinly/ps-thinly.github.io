//poistaa koko storagen tyhjäks
const button = document.querySelector("#reset-button");

button.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
//tyhjentää vain strange rocksit
const removeStranges = document.querySelector("#remove-stranges");
removeStranges.addEventListener("click", () => {

    for (let i = 0; i <= 14; i++) {
    localStorage.removeItem("strangerock1-" + i);
    localStorage.removeItem("strangerock2-" + i);
}
    localStorage.removeItem("lastStrangeRock");
    location.reload();

});
//tyhjentää vain golden rocksit
const removeGoldens = document.querySelector("#remove-goldens");
removeGoldens.addEventListener("click", () => {

    for (let i = 0; i <= 14; i++) {
    localStorage.removeItem("goldenrock1-" + i);
    localStorage.removeItem("goldenrock2-" + i);
}
    localStorage.removeItem("lastGoldenRock");
    location.reload();
});