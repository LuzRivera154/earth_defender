var Sounds = /** @class */ (function () {
    function Sounds() {
    }
    Sounds.playLaserSound = function () {
        var audio = document.querySelector("audio#sound_laser");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    };
    Sounds.playFallSound = function () {
        var audio = document.querySelector("audio#sound_fall");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    };
    Sounds.playContactSound = function () {
        var audio = document.querySelector("audio#sound_contact");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    };
    Sounds.playBackgroundSound = function () {
        var audio = document.querySelector("audio#sound_background");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    };
    Sounds.playGameOver = function () {
        var audio = document.querySelector("audio#sound_gameover");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    };
    return Sounds;
}());
export { Sounds };
