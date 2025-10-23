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
import { Earth } from "./Earth.js";
var Heart = /** @class */ (function (_super) {
    __extends(Heart, _super);
    function Heart(game, earth) {
        var _this = _super.call(this, game) || this;
        _this.earth = earth;
        return _this;
    }
    Heart.prototype.start = function () {
        this.setImage(Assets.getHeartImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2 + 30,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 25,
        });
    };
    Heart.prototype.update = function () {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        });
        var text = this.getGame().getContext();
        text.font = "1.2rem serif";
        var x = this.getGame().CANVAS_WIDTH / 2 + 10;
        var y = this.getGame().CANVAS_HEIGHT - this.getImage().height - 10;
        text.fillText(this.earth.getLife().toString(), x, y);
    };
    return Heart;
}(Earth));
export { Heart };
