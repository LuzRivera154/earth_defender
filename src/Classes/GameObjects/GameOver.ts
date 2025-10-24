import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";

export class GameOver extends GameObject {
    protected start(): void {
        this.setImage(Assets.getGameOverImage());
        this.setPosition({
            x: 200,
            y: 250
        })
    }
    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y,
        });
        this.limit()
    }
}