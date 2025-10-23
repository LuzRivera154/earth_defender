import { GameObject } from "./GameObjects.js";
import { Assets } from "../Assets.js";

export class Stars extends GameObject {
    protected start(): void {
        this.setImage(Assets.getStarsImage());
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT - 10,
        });
    }
    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y + 1
        });
        if (this.getPosition().y > this.getGame().CANVAS_HEIGHT) {
            this.setPosition({
                x: this.getPosition().x,
                y: 0
            })
        }
    }
}