
const config = {
    width: 400,
    height: 250,
    backgroundColor: 0x000000,
    type: Phaser.Auto,
    physics: {
        default: 'arcade',
        arcafe: {
            gravity: { y:0 }
        }
    },
    scene: [Preloader, MainScene],
    scale: {
        zoom: 3
    }
}

const game = new Phaser.Game(config);