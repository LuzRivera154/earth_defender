import { GameObject } from "./GameObjects/GameObjects.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Stars } from "./GameObjects/Stars.js";
import { Earth } from "./GameObjects/Earth.js";
import { Heart } from "./GameObjects/Heart.js";
import { IconAlien } from "./GameObjects/IconAlien.js";
import { IconPlayer } from "./GameObjects/IconPlayer.js";
import { Sounds } from "./Sounds.js";
import { GameOver } from "./GameObjects/GameOver.js";
import { Boss } from "./GameObjects/Boss.js";

export class Game {
    // Public attributs
    public readonly CANVAS_WIDTH: number = 1000;
    public readonly CANVAS_HEIGHT: number = 900;

    // Private attributs
    private context: CanvasRenderingContext2D;
    private player: Player;
    private nbAliens: number = 12;
    private nbStar: number = 50;
    private earth: Earth;
    private heart: Heart;
    private iconAlien: IconAlien;
    private iconPlayer: IconPlayer;
    private alienDead: number = 0;
    private bgSound: HTMLAudioElement;
    private gosound: HTMLAudioElement;
    private gameOver: GameOver;
    private interval: number;
    private oneBoss: boolean = false
    private gameObjects: GameObject[] = [];


    constructor() {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
    }
    // Public methods
    public star(): void {
        // Clear context
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);


        // J'instancie le Player avec new Player(this)
        // Je le dessine avec this.draw
        this.player = new Player(this);
        this.instanciate(this.player);

        //Instancier earth
        this.earth = new Earth(this);
        this.instanciate(this.earth)

        // Instancier heart
        this.heart = new Heart(this, this.earth);
        this.instanciate(this.heart);

        // Instancier icon Alien
        this.iconAlien = new IconAlien(this);
        this.instanciate(this.iconAlien)

        // Instancier icon Player
        this.iconPlayer = new IconPlayer(this);
        this.instanciate(this.iconPlayer);

        // Instancier 10 aliens  
        for (let i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }


        // Instancier 50 stars
        for (let i = 0; i < this.nbStar; i++) {
            this.instanciate(new Stars(this));
        }


        // Listen to input
        Input.listen();

        this.bgSound = Sounds.playBackgroundSound();
        this.bgSound.volume = 0.5;
        this.bgSound.loop = true;
        this.bgSound.play()
        //loop
        this.loop();
    }

    public over(): void {
        this.gosound = Sounds.playGameOver();
        if (this.bgSound) {
            this.bgSound.pause();
            this.bgSound.currentTime = 0;
        }

        this.gameOver = new GameOver(this)
        this.instanciate(this.gameOver);
        this.gosound.play()
        setTimeout(() => {
            clearInterval(this.interval)
        }, 50);

        setTimeout(() => window.location.reload(), 3000);
    }
    public instanciate(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }

    public setAddAlienDead(): void {
        this.alienDead++;
    }

    public getAlienDead(): number {
        return this.alienDead;
    }
    public getPlayer(): Player {
        return this.player;
    }

    public destroy(gameObject: GameObject): void {
        this.gameObjects = this.gameObjects.filter(go => go != gameObject)
        const alienDied = this.gameObjects.filter(go => go instanceof Alien).length;
        if (alienDied === 0) {
            this.setNbAlien(2);
            for (let i = 0; i < this.nbAliens; i++) {
                this.alienDead = 0;
                this.instanciate(new Alien(this));
            }
            if (this.nbAliens >= 22 && !this.oneBoss) {
                this.instanciate(new Boss(this));
                this.oneBoss = true
            }
        }
    }

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }

    public setNbAlien(moreAliens: number): void {
        this.nbAliens += moreAliens;
    }
    public getNbAlien(): number {
        return this.nbAliens;
    }

    //  La fonction draw qui affiche un gameObject
    private draw(gameObject: GameObject) {
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }

    // Crear mas aliens 

    private loop() {
        this.interval = setInterval(() => {
            // J'efface la frame précédente.
            this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

            this.gameObjects.forEach(go => {
                go.callUpdate();
                this.draw(go);

                this.gameObjects.forEach(other => {

                    if (other != go && go.overlap(other)) {
                        go.callCollide(other);
                    }
                })
            });
        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    }
}