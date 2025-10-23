import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject(game) {
        this.position = {
            x: 0,
            y: 0,
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }
    // Getter d'image et de position
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
    };
    GameObject.prototype.setPosition = function (position) {
        this.position = position;
    };
    GameObject.prototype.start = function () {
    };
    GameObject.prototype.update = function () { };
    GameObject.prototype.callUpdate = function () {
        this.update();
    };
    /**
     * Vérifie si l'autre GameObject entre en collision avec ce GameObject
     */
    GameObject.prototype.overlap = function (other) {
        if ((other.left() <= this.left() && this.left() <= other.right()
            || other.left() <= this.right() && this.right() <= other.right()
            || this.left() <= other.left() && other.left() <= this.right()
            || this.left() <= other.right() && other.right() <= this.right())
            &&
                (other.top() <= this.top() && this.top() <= other.bottom()
                    || other.top() <= this.bottom() && this.bottom() <= other.bottom()
                    || this.top() <= other.top() && other.top() <= this.bottom()
                    || this.top() <= other.bottom() && other.bottom() <= this.bottom())) {
            return true;
        }
        else {
            return false;
        }
    };
    /** Méthodes utilitaires pour la position du GameObject */
    GameObject.prototype.top = function () {
        return this.position.y;
    };
    GameObject.prototype.bottom = function () {
        return this.position.y + this.image.height;
    };
    GameObject.prototype.left = function () {
        return this.position.x;
    };
    GameObject.prototype.right = function () {
        return this.position.x + this.image.width;
    };
    GameObject.prototype.collide = function (other) { };
    GameObject.prototype.callCollide = function (other) {
        this.collide(other);
    };
    GameObject.prototype.limit = function () {
        var position = this.getPosition();
        var img = this.getImage();
        var x = Math.max(0, Math.min(position.x, this.getGame().CANVAS_WIDTH - img.width));
        var y = Math.max(0, Math.min(position.y, this.getGame().CANVAS_HEIGHT - img.height));
        this.setPosition({ x: x, y: y });
    };
    return GameObject;
}());
export { GameObject };
