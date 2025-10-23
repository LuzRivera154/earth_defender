import { GameObject } from "./GameObjects.js";
import { Assets } from "../Assets.js";
import { Alien } from "./Alien.js";
import { Sounds } from "../Sounds.js";

export class Earth extends GameObject {

    private life : number = 5;

    protected start(): void {
        this.setImage(Assets.getEarthImage());
        this.setPosition({
            x: 0,
            y: this.getGame().CANVAS_HEIGHT,
        });        
    }

    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        })
        this.limit();
    }
    public getLife() : number{
        return this.life;
    }

    protected collide(other: GameObject): void {
        if (other instanceof Alien) {
            if(this.life > 0){
                this.getGame().destroy(other);
                this.life = this.life - 1;
                Sounds.playFallSound().play();
            } else {
                this.getGame().over();
            }
        }
    }


}