import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { Earth } from "./Earth.js";

export class Heart extends Earth {
    private earth: Earth;
    constructor(game: Game, earth: Earth) {
        super(game);
        this.earth = earth;
    }
    protected start(): void {
        this.setImage(Assets.getHeartImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2 + 30,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 40,
        })
    }
    protected update(): void {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        })
        
        const text = this.getGame().getContext();
        text.font = "1.2rem serif"
        const x = this.getGame().CANVAS_WIDTH / 2 + 10;
        const y = this.getGame().CANVAS_HEIGHT - this.getImage().height - 25;
        text.fillText(this.earth.getLife().toString(),
            x,y)
    }
}