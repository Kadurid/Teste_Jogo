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
        groundLayer.renderDebug(debugGraphics,{
          tileColor: null,
          collidingTileColor: new Phaser.Display.Color(205,65,58),
          faceColor: new Phaser.Display.Color(40,39,37,255)
        });
      
        const character = this.add.sprite(128,128,'character','walk-down/walk-down-3');

        this.anims.create({
          key: "character-idle-down",
          frames: [{ key: 'character', frame: 'walk-down-3.png'}]
        });


        this.anims.create({
          key: "character-run-down",
          frames: this.anims.generateFrameNames('character', {start: 1, end: 8, prefix: "run-down-", suffix: ".png"}),
          repeat: -1,
          frameRate: 15
        });
        this.anims.create({
          key: "character-run-up",
          frames: this.anims.generateFrameNames('character', {start: 1, end: 8, prefix: "run-up-", suffix: ".png"}),
          repeat: -1,
          frameRate: 15
        });
       this.anims.create({
         key: "character-run-side",
          frames: this.anims.generateFrameNames('character', {start: 1, end: 8, prefix: "run-side-", suffix: ".png"}),
          repeat: -1,
          frameRate: 15
       });
       character.anims.play("character-idle-down");
    }
    
    update(){

    }
}