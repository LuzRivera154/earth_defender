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
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.start = function () {
        this.setImage(Assets.getIconAlienImage());
        this.setPosition({
            x: 15,
            y: 20,
        });
    };
    Icon.prototype.update = function () {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        });
        this.limit();
        var text = this.getGame().getContext();
        text.font = "1.5rem serif";
        text.fillStyle = "white";
        var x = 55;
        var y = 45;
        text.fillText(this.getGame().getAlienDead() + " / " + this.getGame().getNbAlien().toString(), x, y);
    };
    return Icon;
}(GameObject));
export { Icon };
