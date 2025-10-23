import { Assets } from "../Assets.js";
import { Position } from "../Position.js";
import { Game } from "../Game.js";

export class GameObject {

    private game: Game;
    private position: Position;
    private image: HTMLImageElement;
    constructor(game: Game) {
        this.position = {
            x: 0,
            y: 0,
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start()
    }
    // Getter d'image et de position
    public getImage(): HTMLImageElement {
        return this.image;
    }
    public getPosition(): Position {
        return this.position;
    }
    public getGame(): Game {
        return this.game
    }
    public setImage(image: HTMLImageElement) {
        this.image = image;
    }
    public setPosition(position: Position) {
        this.position = position
    }
    protected start() {
    }

    protected update() { }
    public callUpdate() {
        this.update();
    }

    /**
     * Vérifie si l'autre GameObject entre en collision avec ce GameObject
     */
    public overlap(other: GameObject): boolean {
        if (
            (other.left() <= this.left() && this.left() <= other.right()
                || other.left() <= this.right() && this.right() <= other.right()
                || this.left() <= other.left() && other.left() <= this.right()
                || this.left() <= other.right() && other.right() <= this.right()
            )
            &&
            (
                other.top() <= this.top() && this.top() <= other.bottom()
                || other.top() <= this.bottom() && this.bottom() <= other.bottom()
                || this.top() <= other.top() && other.top() <= this.bottom()
                || this.top() <= other.bottom() && other.bottom() <= this.bottom()
            )
        ) {
            return true;
        } else {
            return false;
        }
    }

    /** Méthodes utilitaires pour la position du GameObject */
    public top(): number {
        return this.position.y;
    }
    public bottom(): number {
        return this.position.y + this.image.height;
    }
    public left(): number {
        return this.position.x;
    }
    public right(): number {
        return this.position.x + this.image.width;
    }
    protected collide(other: GameObject) { }

    public callCollide(other: GameObject): void {
        this.collide(other);
    }
    protected limit() {
        const position = this.getPosition();
        const img = this.getImage();
        const x = Math.max(0, Math.min(position.x, this.getGame().CANVAS_WIDTH - img.width))
        const y = Math.max(0, Math.min(position.y, this.getGame().CANVAS_HEIGHT - img.height));
        this.setPosition({ x, y })
    }
}