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
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.life = 8;
        return _this;
    }
    Boss.prototype.start = function () {
        this.setImage(Assets.getBossImage());
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT / 4 - 10,
        });
    };
    Boss.prototype.update = function () {
        this.limit();
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y += this.speed
        });
    };
    Boss.prototype.bossAttack = function (attack) {
        this.life -= attack;
        if (this.life <= 0) {
            this.getGame().destroy(this);
        }
    };
    Boss.prototype.getLife = function () {
        return this.life;
    };
    return Boss;
}(GameObject));
export { Boss };
