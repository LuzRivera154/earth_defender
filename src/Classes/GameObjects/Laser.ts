import { GameObject } from "./GameObjects.js";
import { Assets } from "../Assets.js";
import { Alien } from "./Alien.js";
import { Boss } from "./Boss.js";

export class Laser extends GameObject {
    private speed: number = 10;

    protected start(): void {

        this.setImage(Assets.getLaserImage());
        const player = this.getGame().getPlayer();
        const playerPos = player.getPosition();
        const playerImg = player.getImage();
        const laserImg = this.getImage();

        this.setPosition({
            x: playerPos.x + (playerImg.width / 2) - (laserImg.width / 2),
            y: playerPos.y - laserImg.height
        })
    }

    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y - this.speed
        })
        /**
         * If the laser go past the top, it is destroyed
         */
        if (this.getPosition().y < 0) {
            this.getGame().destroy(this);
        }
    }

    protected collide(other: GameObject): void {
        if (other instanceof Alien) {
            this.getGame().destroy(other);
            this.getGame().destroy(this);
            this.getGame().setAddAlienDead()
        } else if (other instanceof Boss){
            other.bossAttack(1);
            this.getGame().destroy(this);
            
        }
    }
}