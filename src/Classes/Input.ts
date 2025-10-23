import { Sounds } from "./Sounds.js";
export class Input {

    private static axisX: Direction = 0;
    private static isShooting: boolean = false;

    public static getAxisX(): Direction {
        return this.axisX;
    }

    public static getIsShooting(): boolean {
        return Input.isShooting;
    }
    public static listen() {
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                //Avanza
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                case " ":
                    Input.isShooting = true;
                   
                    break
                default:
                    break;
            }
        })
        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                //Se para
                case "d":
                case "D":
                case "Q":
                case "q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;
                    break
                default:
                    break;
            }
        })
    }
}

export type Direction = 0 | 1 | -1;