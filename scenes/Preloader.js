class Preloader extends Phaser.Scene {
    constructor(){
        super('preloader');
    }

    preload(){
        this.load.image('tiles', 'assets/tileset/gentle forest,jungle palette.png');
        this.load.image('trees','assets/tileset/treeWall/treeWall.png');
        this.load.tilemapTiledJSON('forest','assets/tileset/MapForest.json');

        this.load.atlas("character", "assets/character/character.png", "assets/character/character.json");
        this.load.atlas("bear", "assets/enemies/bear/bear.png","assets/enemies/bear/bear.json");


    }
    create(){
        this.scene.start('fase1');
    }
}