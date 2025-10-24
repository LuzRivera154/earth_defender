import { Game } from "./Classes/Game.js";
var canvas = document.querySelector("canvas");
canvas.style.display = "none";
var btn = document.querySelector("#btn-start");
var screenStart = document.querySelector(".screen-start");
btn.addEventListener("click", start_func);
function start_func() {
    screenStart.style.display = "none";
    canvas.style.display = "block";
    var game = new Game();
    game.star();
}
