import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Stars } from "./GameObjects/Stars.js";
import { Earth } from "./GameObjects/Earth.js";
import { Heart } from "./GameObjects/Heart.js";
import { IconAlien } from "./GameObjects/IconAlien.js";
import { IconPlayer } from "./GameObjects/IconPlayer.js";
import { Sounds } from "./Sounds.js";
var Game = /** @class */ (function () {
    function Game() {
        // Public attributs
        this.CANVAS_WIDTH = 1000;
        this.CANVAS_HEIGHT = 900;
        this.nbAliens = 12;
        this.nbStar = 50;
        this.alienDead = 0;
        this.gameObjects = [];
        var canvas = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
    }
    // Public methods
    Game.prototype.star = function () {
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
        this.instanciate(this.earth);
        // Instancier heart
        this.heart = new Heart(this, this.earth);
        this.instanciate(this.heart);
        // Instancier icon Alien
        this.iconAlien = new IconAlien(this);
        this.instanciate(this.iconAlien);
        // Instancier icon Player
        this.iconPlayer = new IconPlayer(this);
        this.instanciate(this.iconPlayer);
        // Instancier 10 aliens  
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        // Instancier 50 stars
        for (var i = 0; i < this.nbStar; i++) {
            this.instanciate(new Stars(this));
        }
        // Listen to input
        Input.listen();
        this.bgSound = Sounds.playBackgroundSound();
        this.bgSound.volume = 0.3;
        this.bgSound.loop = true;
        this.bgSound.play();
        //loop
        this.loop();
    };
    Game.prototype.over = function () {
        if (this.bgSound) {
            this.bgSound.pause();
            this.bgSound.currentTime = 0;
        }
        alert("Game Over!");
        window.location.reload();
    };
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    Game.prototype.setAddAlienDead = function () {
        this.alienDead++;
    };
    Game.prototype.getAlienDead = function () {
        return this.alienDead;
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.destroy = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
        var alienDied = this.gameObjects.filter(function (go) { return go instanceof Alien; }).length;
        if (alienDied === 0) {
            this.setNbAlien(2);
            for (var i = 0; i < this.nbAliens; i++) {
                this.alienDead = 0;
                this.instanciate(new Alien(this));
            }
        }
    };
    Game.prototype.getContext = function () {
        return this.context;
    };
    Game.prototype.setNbAlien = function (moreAliens) {
        this.nbAliens += moreAliens;
    };
    Game.prototype.getNbAlien = function () {
        return this.nbAliens;
    };
    //  La fonction draw qui affiche un gameObject
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    // Crear mas aliens 
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            // J'efface la frame précédente.
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.draw(go);
                _this.gameObjects.forEach(function (other) {
                    if (other != go && go.overlap(other)) {
                        go.callCollide(other);
                    }
                });
            });
        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    };
    return Game;
}());
export { Game };
