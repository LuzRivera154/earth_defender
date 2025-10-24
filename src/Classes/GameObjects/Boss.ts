import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { GameObject } from "./GameObjects.js";

export class Boss extends GameObject {
    private speed: number = 2;
    private life: number = 8;

    protected start(): void {
        this.setImage(Assets.getBossImage());
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT / 4 - 50,
        })
    }
    protected update(): void {
        this.limit();
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y += this.speed
        })
    }
    public bossAttack(attack: number) {
        this.life -= attack;
        if (this.life <= 0) {
            this.getGame().destroy(this);
        }
    }

    public getLife(): number {
        return this.life;
    }

}