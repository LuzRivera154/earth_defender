var Sound = /** @class */ (function () {
    function Sound() {
    }
    Sound.getLaserSound = function () {
        var audio = document.querySelector("audio#sound_laser");
        if (audio == null) {
            throw Error("No sound found");
        }
        return audio;
    };
    Sound.setPlayLaserSound = function () {
        var sound = this.getLaserSound().cloneNode(true);
        sound.play;
    };
    return Sound;
}());
export { Sound };
