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
import { GameObject } from "./GameObjects.js";
import { Assets } from "../Assets.js";
import { Alien } from "./Alien.js";
import { Sounds } from "../Sounds.js";
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.life = 5;
        return _this;
    }
    Earth.prototype.start = function () {
        this.setImage(Assets.getEarthImage());
        this.setPosition({
            x: 0,
            y: this.getGame().CANVAS_HEIGHT,
        });
    };
    Earth.prototype.update = function () {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        });
        this.limit();
    };
    Earth.prototype.getLife = function () {
        return this.life;
    };
    Earth.prototype.collide = function (other) {
        if (other instanceof Alien) {
            if (this.life > 0) {
                this.getGame().destroy(other);
                this.life = this.life - 1;
                Sounds.playFallSound().play();
            }
            else {
                this.getGame().over();
            }
        }
    };
    return Earth;
}(GameObject));
export { Earth };
