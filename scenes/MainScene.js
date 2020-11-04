class MainScene extends Phaser.Scene {

    constructor(){
        super("fase1")
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
      
        var character = this.physics.add.sprite(128,128,'character');
        character.body.setSize(character.width*0.5, character.height*0.8);
        
        //character.setCollideWorldBounds(true);

        this.anims.create({
          key: "character-idle-down",
          frames: [{ key: 'character', frame: 'walk-down-3.png'}]
        });
        this.anims.create({
          key: "character-idle-up",
          frames: [{key: 'character', frame: 'walk-up-3.png'}]
        });
        this.anims.create({
          key: "character-idle-side",
          frames: [{key: 'character', frame: 'walk-side-3.png'}]
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
       //character.anims.play("character-idle-side");
       //Colliders
       this.physics.add.collider(character,wallsLayer);
       this.physics.add.collider(character,groundLayer);
       
       this.cameras.main.startFollow(character, true);
       //this.cameras.main.setBounds()
      //------------------
       this.character = character
    }
    
    update(){
      let cursors = this.input.keyboard.createCursorKeys();
      var character = this.character;
    /*go*/
    if(cursors.left.isDown){
      character.setVelocity(-100,0);
      character.anims.play('character-run-side', true);
      character.scaleX = -1;
      character.body.offset.x = 24;
    }else if(cursors.right.isDown){
      character.setVelocity(100,0);
      character.anims.play('character-run-side', true);
      character.scaleX = 1;
      character.body.offset.x = 8;
    }else if(cursors.up.isDown){
      character.setVelocity(0,-100);
      character.anims.play('character-run-up', true);
    }else if(cursors.down.isDown){
      character.setVelocity(0,100);
      character.anims.play('character-run-down', true);
    }else{
      character.setVelocity(0,0);
      character.anims.play('character-idle-down');
     // game.player.anims.play('stopped');
    }
    }
}