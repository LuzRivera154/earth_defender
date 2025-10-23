export class Sounds {
    public static playLaserSound(): HTMLAudioElement {
        const audio: HTMLAudioElement = document.querySelector("audio#sound_laser");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    }
    public static playFallSound(): HTMLAudioElement {
        const audio: HTMLAudioElement = document.querySelector("audio#sound_fall");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src)
    }
    public static playContactSound(): HTMLAudioElement {
        const audio: HTMLAudioElement = document.querySelector("audio#sound_contact");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src)
    }
    public static playBackgroundSound(): HTMLAudioElement {
        const audio: HTMLAudioElement = document.querySelector("audio#sound_background");
        if (audio == null) {
            throw Error("No sound found");
        }
        return new Audio(audio.src);
    }
}