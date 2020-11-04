class MainScene extends Phaser.Scene {
    constructor(){
        super("fase1")
    }

    preload(){

    }

    create(){
        const map = this.make.tilemap({key:'forest'});
        const tileset1 = map.addTilesetImage('Forest', 'tiles');
        const tileset2 = map.addTilesetImage('treeWall','trees');

        const groundLayer = map.createStaticLayer('Ground', tileset1);
        const wallsLayer = map.createStaticLayer('Walls',tileset2);
        //map.createStaticLayer('Superior1')
        
        groundLayer.setCollisionByProperty({ collides: true});
        wallsLayer.setCollisionByProperty({collides: true});

        const debugGraphics = this.add.graphics().setAlpha(0.7);
        wallsLayer.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        });

    }
    
    update(){

    }
}