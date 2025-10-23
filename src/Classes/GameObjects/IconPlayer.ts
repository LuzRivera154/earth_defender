import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";

export class IconPlayer extends GameObject {
    protected start(): void {
        this.setImage(Assets.getIconPlayerImage());
        this.setPosition({
            x: 7,
            y: 55
        })
    }

    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        })

        const text = this.getGame().getContext();
        text.font = "1.7rem serif"
        text.fillStyle = "white"
        const x = 60;
        const y = 95;
        text.fillText(this.getGame().getPlayer().getLife().toString(), x, y)
    }
}
