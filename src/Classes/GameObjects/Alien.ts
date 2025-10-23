import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";


export class Alien extends GameObject {
    private speed: number = 1;

    protected start(): void {
        this.setImage(Assets.getAlienImage());
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
        });
        
    }
    
 
}