var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";
import { Input } from "../Input.js";
import { Laser } from "./Laser.js";
import { Alien } from "./Alien.js";
import { Sounds } from "../Sounds.js";
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 10;
        _this.life = 5;
        _this.lastShootTime = Date.now();
        _this.shootInterval_ms = 200;
        return _this;
    }
    Player.prototype.start = function () {
        this.setImage(Assets.getPlayerImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 75,
        });
    };
    Player.prototype.update = function () {
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
    };
    Player.prototype.collide = function (other) {
        if (other instanceof Alien) {
            if (this.life > 0) {
                this.getGame().destroy(other);
                this.life = this.life - 1;
                Sounds.playContactSound().play();
            }
            else {
                this.getGame().over();
            }
        }
    };
    Player.prototype.getLife = function () {
        return this.life;
    };
    return Player;
}(GameObject));
export { Player };
