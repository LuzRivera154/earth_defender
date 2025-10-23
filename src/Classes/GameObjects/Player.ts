import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";
import { Input } from "../Input.js";
import { Laser } from "./Laser.js";
import { Alien } from "./Alien.js";
import { Sounds } from "../Sounds.js";

export class Player extends GameObject {
    private speed: number = 10;
    private life: number = 5;


    public lastShootTime: number = Date.now();
    private shootInterval_ms: number = 200;

    protected start(): void {
        this.setImage(Assets.getPlayerImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 75,
        });
    }
    protected update(): void {
        this.setPosition({
            x: this.getPosition().x += this.speed * Input.getAxisX(),
            y: this.getPosition().y,
        });

        this.limit();
        if (Input.getIsShooting() &&
            ((Date.now() - this.lastShootTime) >= this.shootInterval_ms)) {
            this.getGame().instanciate(new Laser(this.getGame()));
            this.lastShootTime = Date.now();
             Sounds.playLaserSound().play();
           
        }
    }
    protected collide(other: GameObject): void {
        if (other instanceof Alien) {
            if (this.life > 0) {
                this.getGame().destroy(other);
                this.life = this.life - 1;
                Sounds.playContactSound().play();
            } else {
                this.getGame().over();
            }

        }
    }
    public getLife(): number {
        return this.life;
    }

}