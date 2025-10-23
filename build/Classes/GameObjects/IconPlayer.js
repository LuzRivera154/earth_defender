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
var IconPlayer = /** @class */ (function (_super) {
    __extends(IconPlayer, _super);
    function IconPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconPlayer.prototype.start = function () {
        this.setImage(Assets.getIconPlayerImage());
        this.setPosition({
            x: 7,
            y: 55
        });
    };
    IconPlayer.prototype.update = function () {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y
        });
        var text = this.getGame().getContext();
        text.font = "1.7rem serif";
        text.fillStyle = "white";
        var x = 60;
        var y = 95;
        text.fillText(this.getGame().getPlayer().getLife().toString(), x, y);
    };
    return IconPlayer;
}(GameObject));
export { IconPlayer };
