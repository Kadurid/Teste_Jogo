class Preloader extends Phaser.Scene {
    constructor(){
        super('preloader');
    }

    preload(){
        this.load.image('tiles', 'assets/tileset/gentle forest,jungle palette.png');
        this.load.image('trees','assets/tileset/tree wall/tree wall,over layer.png')
        this.load.tilemapTiledJSON('forest','assets/tileset/MapForest.json');


    }
    create(){
        this.scene.start('fase1');
    }
}