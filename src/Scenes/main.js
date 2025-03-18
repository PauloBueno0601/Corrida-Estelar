import SceneInicial from "./bemVindo.js";
import SceneJogo from "./telaJogo.js";

const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 600,
    backgroundColor: "#000000",
    physics: {
        default: "arcade", 
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
     scale: {
        mode: Phaser.Scale.FILL,
        autoCenter: Phaser.Scale.CENTER_BOTH
     },
    scene: [SceneInicial, SceneJogo], // Registrando as cenas
};

const game = new Phaser.Game(config);
