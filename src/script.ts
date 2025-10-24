
import { Game } from "./Classes/Game.js";

const canvas: HTMLCanvasElement = document.querySelector("canvas");

canvas.style.display = "none";
const btn: HTMLButtonElement = document.querySelector("#btn-start");
const screenStart: HTMLDivElement = document.querySelector(".screen-start");

btn.addEventListener("click", start_func)
function start_func() {
    screenStart.style.display = "none";
    canvas.style.display = "block";
    
        const game = new Game();
        game.star();
}
