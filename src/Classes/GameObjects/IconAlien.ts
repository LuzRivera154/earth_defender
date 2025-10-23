import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";

export class IconAlien extends GameObject {

    protected start(): void {
        this.setImage(Assets.getIconAlienImage());
        this.setPosition({
            x:15,
            y:20,
        })
    }
    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        })
        this.limit();

        const text = this.getGame().getContext();
        text.font = "1.5rem serif"
        text.fillStyle ="white"
        const x = 55;
        const y = 45;
        text.fillText(this.getGame().getAlienDead() +" / " + this.getGame().getNbAlien().toString() ,
            x, y)
    }
}